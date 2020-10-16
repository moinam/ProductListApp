import { Injectable } from '@angular/core';
import { IProduct } from '../products/product';

@Injectable()
export class DataService {
  private checkout: IProduct[] =[];
  public alert: any ={
    type : "",
    message: "",
    show: false
  };

  getCartItems(): IProduct[]{
    return this.checkout;
  }

  setCartItems(checkout:IProduct[]){
    this.checkout = checkout;
  }

  getAlertInfo(): any{
    return this.alert;
  }

  setAlertInfo(alert: any){
    this.alert = alert;
  }
}
