import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PruebaPage } from './prueba.page';
import {NgxCaptchaModule} from 'ngx-captcha';

const routes: Routes = [
  {
    path: '',
    component: PruebaPage
  }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        NgxCaptchaModule
    ],
  declarations: [PruebaPage]
})
export class PruebaPageModule {}
