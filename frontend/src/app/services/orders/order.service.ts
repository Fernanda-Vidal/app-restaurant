import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IOrder } from '../../../../../backend/src/interfaces';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = `${environment.baseApiUrl}order`

  constructor(private http:HttpClient) {}

  getOrderByCustomer(customerId: number): Observable<IOrder[]> {
    return this.http.get<IOrder[]>(`${this.apiUrl}/2`)
  }
}
