import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaCreateComponent } from './components/views/categoria/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria/categoria-delete/categoria-delete.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria/categoria-read/categoria-read.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria/categoria-update/categoria-update.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {
    path: '',
  component: HomeComponent  
 },
 {
   path: 'categorias',
   component: CategoriaReadComponent
 },
 {
   path: 'categorias/create',
   component: CategoriaCreateComponent
 },
 {
   path: 'categorias/delete/:id',
   component: CategoriaDeleteComponent
 },
 {
   path: 'categorias/update/:id',
   component: CategoriaUpdateComponent
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
