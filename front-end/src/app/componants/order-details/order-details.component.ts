import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderServiceService } from 'src/app/service/order-service.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {
 order!: Order;
constructor(private orderService: OrderServiceService,
            private route:ActivatedRoute)  {}

ngOnInit(): void{
  this.getOrder()
   }

  getOrder(){
    let id=this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderById(id).subscribe(
      data=>{
        this.order= data
      }

    )
  }
}
