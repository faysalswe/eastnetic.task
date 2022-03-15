import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RectangleDimensionService {
  prefix = "api/dimension"
  baseUrl = '';
  constructor(
    @Inject('BASE_URL') baseUrl: string,
    private http: HttpClient,
  ) {
    this.baseUrl = baseUrl;
   }

  getInitialDimension() {
    return this.http.get(`${this.baseUrl}${this.prefix}`);
  }

  UpdateDimension(dimension: RectangleDimension) {
    return this.http.put(`${this.baseUrl}${this.prefix}`, dimension);
  }

}
