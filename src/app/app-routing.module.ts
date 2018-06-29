import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
//import component
import {ColorpaletteComponent} from './colorpalette/colorpalette.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [

  {path: '', component: ColorpaletteComponent},
  {path: 'colorpalette', component: ColorpaletteComponent},
  {path: 'otherComponent', component:HomeComponent}


];


@NgModule({
exports:[RouterModule],
imports: [
  RouterModule.forRoot(routes)
]
  //imports: [
    //CommonModule
  //],
  //declarations: []
})
export class AppRoutingModule { }
