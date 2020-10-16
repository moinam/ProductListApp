import { Component, OnInit } from "@angular/core";

import { IProduct } from "../product";
import { ProductService } from "../product.service";
import { DataService } from "../../core/data.service";

@Component({
  selector: "app-product-catalog",
  templateUrl: "./product-catalog.component.html",
})
export class ProductCatalogComponent implements OnInit {
  pageTitle = "Product List";
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = "";
  chosenProducts: IProduct[] = [];

  _listFilter = "";
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(
    private productService: ProductService,
    private dataService: DataService
  ) {}

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.name.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  addToCart(id: number) {
    let alert: any ={
      type : "success",
      message: "Item has been added to cart",
      show: true
    };
    this.chosenProducts = this.dataService.getCartItems();
    this.productService.getProduct(id).subscribe(
      product => {this.chosenProducts.push(product);
      this.dataService.setCartItems(this.chosenProducts);
      this.dataService.setAlertInfo(alert);
      },
      error => this.errorMessage = <any>error);
  }

  ngOnInit(): void {
    this.productService.getCartItems().subscribe(
      (products) => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      (error) => (this.errorMessage = <any>error)
    );
  }
}
