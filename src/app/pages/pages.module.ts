import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { SearchComponent } from './search/search.component';
import {RouterModule} from "@angular/router";
import {PagesRoutingModule} from "./pages-routing.module";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    PagesComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    FormsModule,
  ]
})
export class PagesModule { }
