import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component'
import { ProductComponent } from './product/product.component';
import { ProductInfoComponent } from './product-info/product-info.component';

const routes: Routes = [
  {
    path: "",
    component: ProductComponent,
    children: [
      {
        path: "",
        children: [
          { path: "catalog", component: ProductCatalogComponent},
          { path: "info", component: ProductInfoComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
