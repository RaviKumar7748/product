import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-contactlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {

  products:Product[]=[ ];
  constructor(private productService:ProductService, private router:Router) {
  }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getProducts().subscribe(
      data=>{
        this.products=data;
      }
    );
  }
  //remove a contact
  deleteProduct(id:number){
    this.productService.deleteProductById(id).subscribe(
      data=>{
        console.log("SUCCESSFULL........");
        console.log(data);
        this.getAllProducts();
      },
      error=>{
        console.log("FAILED........");
        console.log(error);
      }
    )
   }
   //edit a contact
  editProducts(id:number){
    console.log("Edited :: "+id);
    this.router.navigate(['/edit',id]); 
  }
}