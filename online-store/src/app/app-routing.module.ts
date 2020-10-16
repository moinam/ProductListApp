import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./user/user.component";
import { CheckoutComponent } from "./checkout/checkout.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "checkout", component: CheckoutComponent },
  { path: "user", component: UserComponent },
  {
    path: "products",
    loadChildren: () =>
      import("./products/products.module").then((m) => m.ProductsModule),
  },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "**", redirectTo: "home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
