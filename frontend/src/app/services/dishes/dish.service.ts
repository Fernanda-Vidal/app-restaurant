import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IDish } from '../../../../../backend/src/interfaces';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DishService {
private apiUrl = `${environment.baseApiUrl}dishes`;

  constructor(private http:HttpClient) {}

  getAllDishes(): Observable<IDish[]> {
    return this.http.get<IDish[]>(this.apiUrl);
  }
}
