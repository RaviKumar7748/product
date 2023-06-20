import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './createproduct/createproduct.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductlistComponent } from './productlist/productlist.component';

const routes: Routes = [
{path:'products',component:ProductlistComponent},
{path:'',redirectTo:'products',pathMatch:'full'},
{path:'create-product',component:CreateProductComponent},
 {path:'edit/:id',component:ProducteditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
