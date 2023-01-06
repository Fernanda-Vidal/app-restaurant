import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ICustomer } from '../../../../../backend/src/interfaces';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}customer`

  constructor(private http:HttpClient) {}

  createCustomer(customer: ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomer>(this.apiUrl, customer);
  }
}
