import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../model/order';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  private baseUrl = 'http://localhost:8080/api/';
  //private baseUrl = 'http://localhost:8080/api/allOrders';
  //private url = 'http://localhost:8080/api/category?id=';
  constructor(private http: HttpClient) { }
  getOrders(page:any,size:any): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}allOrders?page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }
  getOrdersByCategoryId(id:any,page: any ,size: any): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}category?id=${id}&page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }
  getOrdersByKey(word: any,page: any ,size: any): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.baseUrl}orderkey?word=${word}&page=${page}&size=${size}`).pipe(
      map(
        response => response
      )
    )
  }
  getOrderById(id:any): Observable<Order>{
    return this.http.get<Order>(`${this.baseUrl}order?id=${id}`).pipe(
      map(
        response => response
      )
    )
  }
}
