import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-createProduct',
  templateUrl: './create-Product.component.html',
  styleUrls: ['./create-Product.component.css']
})
export class CreateProductComponent implements OnInit {

    ngOnInit(): void { }

    product:Product=new Product();

    constructor(private productService:ProductService,
    private router:Router) { }

    onSubmit(){
      console.log(this.product);
      this.saveProduct();
    }
    saveProduct(){
      this.productService.createProduct(this.product).subscribe(
        data=>{
          console.log("SUCCESSFULL........");
          console.log(data);
          this.redirectToContactList();
        },
        error=>{
          console.log("FAILED........");
          console.log(error);
        }
      );
    }
    redirectToContactList(){
      this.router.navigate(['/contacts']);
    }
}