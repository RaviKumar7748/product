import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProducteditComponent } from './productedit/productedit.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductlistComponent,
    CreateProductComponent,
    ProductlistComponent,
    ProducteditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }