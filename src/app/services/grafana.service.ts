import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GrafanaService {

  URL = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getGrafanaHome(): Observable<object>{
    return this.http.get(`${this.URL}/grafana/home`);
  }

  getGrafanaApiServerDashboard(): Observable<object>{
    return this.http.get(`${this.URL}/grafana/api-server`)
  }

  getGrafanaAlertRules(): Observable<object>{
    return this.http.get(`${this.URL}/grafana/alert-rules`)
  }

}
