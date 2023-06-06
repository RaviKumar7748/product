import { OnInit,Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.css']
})
export class ProducteditComponent  implements OnInit{
  product:Product=new Product();
  id:number=0;
  constructor(private productService:ProductService,
    private router:Router,private activeRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
  //   this.id=this.activeRouter.snapshot.params['id'];
  //   console.log("UPDATED ID ::"+this.id);
  //   this.productService.fin(this.id).subscribe(
  //     data=>{
  //       console.log("GETTING A CONTACT..");
  //       console.log(data);
  //       this.contact=data;
  //     },
  //     error=>{
  //       console.log("SOMETHING WENT WRONG DURING GETTING A CONTACT..");
  //       console.log(error);  
  //     }
  //   );
  // }
  // updateContact(){
  //   console.log("UPDATED ..");
  //   this.contactService.createContact(this.contact).subscribe(
  //     data=>{
  //       console.log("UPDATING A CONTACT..");
  //       console.log(data);
  //       this.router.navigate(['/contacts'])
  //     },
  //     error=>{
  //       console.log("SOMETHING WENT WRONG DURING UPDATING A CONTACT..");
  //       console.log(error);
  //     });
  //   }

}

}

