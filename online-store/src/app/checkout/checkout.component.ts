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
  totalPrice: number = 0;
  alert: any = {
  type: "success",
  message: "Thank You for Shopping with us !!",
  show: false
};
  constructor(
    private productService: ProductService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.products = this.dataService.getCartItems();
    this.getTotalPrice();
  }

  getTotalPrice(){
    var that = this;
    this.totalPrice = 0;
    this.dataService.getCartItems().forEach(function (val: IProduct){
      that.totalPrice = that.totalPrice + val.price;
    });
  }

  showAlert(){
    this.alert.show = true;
  }

  removeKey(index: number, product: any) {
    let alert: any = {
      type: "info",
      message: "Item has been removed from cart",
      show: true
    };
    this.dataService.getCartItems().splice(index, 1);
    this.dataService.setAlertInfo(alert);
    this.getTotalPrice()
  }

}
