import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListcarPage } from './listcar.page';
import { CarService } from '../api/car.service';

const routes: Routes = [
  {
    path: '',
    component: ListcarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListcarPage]
})
export class ListcarPageModule {
  
}
