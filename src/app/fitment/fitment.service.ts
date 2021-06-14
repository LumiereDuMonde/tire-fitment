import { HttpClient, HttpParams } from '@angular/common/http';

import { FitmentResponse } from './models/fitmentResponse.model';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FitmentService {
  constructor(private http: HttpClient) {}

  getYears() {
    return this.getHttp('years');
  }

  getMakes(year: string) {
    let params = new HttpParams();
    params = params.append('year', year);
    return this.getHttp('makes', params);
  }

  getModels(year: string, make: string) {
    let params = new HttpParams();
    params = params.append('year', year);
    params = params.append('make', make);
    return this.getHttp('models', params);
  }

  getTrims(year: string, make: string, model: string) {
    let params = new HttpParams();
    params = params.append('year', year);
    params = params.append('make', make);
    params = params.append('model', model);
    return this.getHttp('trim', params);
  }

  getHttp(path: string, params: HttpParams = null) {
    return this.http.get<FitmentResponse>(environment.FITMENT_BASE_URL + path, {
      params,
    });
  }
}
