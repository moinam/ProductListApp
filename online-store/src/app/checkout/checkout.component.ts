import { Component, OnInit } from '@angular/core';
import { ProductService } from "../products/product.service";
import { DataService } from "../core/data.service";
import { IProduct } from "../products/product";
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit {
  imageWidth = 50;
  imageMargin = 2;
  errorMessage = "";
  products: IProduct[] = [];
  constructor(
    private productService: ProductService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.products = this.dataService.getCartItems();
  }

  removeKey(index: number, product: any) {
    this.dataService.getCartItems().splice(index, 1);
  }

}
