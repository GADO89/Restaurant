import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-search-order',
  templateUrl: './search-order.component.html',
  styleUrls: ['./search-order.component.css']
})
export class SearchOrderComponent implements OnInit{

  constructor(private orderService: OrderServiceService,
    private router: Router) {}
  
  ngOnInit(): void {
    
  }

  doSearch(value: String){
    this.router.navigateByUrl('/orders/'+value)
  }
}
