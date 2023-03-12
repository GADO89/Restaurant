import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderItemsComponent } from './componants/order-items/order-items.component';
import { CategoryItemsComponent } from './componants/category-items/category-items.component';
import { RouterModule, Routes } from '@angular/router';
import { DropdownMenuComponent } from './componants/dropdown-menu/dropdown-menu.component';
import { SearchOrderComponent } from './componants/search-order/search-order.component';
import { OrderDetailsComponent } from './componants/order-details/order-details.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

// http://localhost:4200/
const routes: Routes = [

  // http://localhost:4200/order/id
  {path: 'order/:id', component:OrderDetailsComponent},

  // http://localhost:4200/category/id
  {path: 'category/:id', component:OrderItemsComponent},

  // http://localhost:4200/category
  {path: 'category', component:OrderItemsComponent},

  // http://localhost:4200/orders/key
  {path: 'orders/:key', component:OrderItemsComponent},

  // http://localhost:4200/orders
  {path: 'orders', component:OrderItemsComponent},

  // http://localhost:4200/
  {path: '', redirectTo: '/orders',pathMatch: 'full'},

  // if user enter any thing without all routes
  {path: '**', redirectTo: '/orders',pathMatch: 'full'}
];
/*
*   // http://localhost:4200/
  {path: '', component:OrderItemsComponent}
* */

@NgModule({
  declarations: [
    AppComponent,
    OrderItemsComponent,
    CategoryItemsComponent,
    DropdownMenuComponent,
    SearchOrderComponent,
    OrderDetailsComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbPaginationModule
    
        //NgModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
