import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioPruebaService {

  private url = 'http://192.168.0.5/conexionBD-spring';
  private headers: Headers;
  constructor(private http: HttpClient) { }

  mostrarTodos() {
    return this.http.get(this.url + '/dato');
  }
  captchaValidation(response: string) {
    return this.http.post('http://localhost:8080/captcha', {response: response});
  }
  borrarId(idUser: number) {
    return this.http.delete(this.url + '/dato/' + idUser);
  }
  insertarNombre(nombre: string) {
    return this.http.post(this.url + '/dato/', {nombre: nombre});
  }
}
