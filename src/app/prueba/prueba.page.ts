import {Component, OnInit, ViewChild} from '@angular/core';
import {ServicioPruebaService} from '../services/servicio-prueba.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReCaptcha2Component} from 'ngx-captcha';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.page.html',
  styleUrls: ['./prueba.page.scss'],
})
export class PruebaPage implements OnInit {

  @ViewChild('captchaElem') captchaElem: ReCaptcha2Component;
  texto = null;
  response;
  public formGroup: FormGroup;

  constructor(private conex: ServicioPruebaService,
              private formBuilder: FormBuilder) { }


  prueba() {
    console.log('prueba');
    this.conex.mostrarTodos().subscribe((valor) => {
      this.texto = valor;
      console.log(this.texto);
    });
  }
  ngOnInit() {
    this.buildForm();
  }
  handleSuccess(event) {
    console.log(event);
    this.conex.captchaValidation(event.toString()).subscribe(response => {
      console.log(response);
      this.response = response;
      console.log(this.response.success);

    });
  }
  public register() {
    const user = this.formGroup.value;
    console.log(user);
  }
  private buildForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [
        Validators.required, Validators.email
      ]],
      password: ['', [
        Validators.required, Validators.minLength(8),
          this.validatePassword
      ]],
      recaptcha: ['', Validators.required]
    });
  }
  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }

  handleReset() {
    this.captchaElem.reloadCaptcha();
  }
  private validatePassword(control: AbstractControl) {
    const password = control.value;
    let error = null;
    if (!password.includes('$')) {
      error = { ...error, dollar: 'needs a dollar symbol' };
    }
    if (!parseFloat(password[0])) {
      error = { ...error, number: 'must start with a number' };
    }
    return error;
  }



}
