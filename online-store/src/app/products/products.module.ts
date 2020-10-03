import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [ProductInfoComponent, ProductCatalogComponent, ProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
