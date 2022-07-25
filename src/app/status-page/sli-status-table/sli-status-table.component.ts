import {Component, OnInit} from '@angular/core';
import {IServiceLevelIndicator} from "../../../interfaces/IServiceLevelIndicator";
import {ESliStatus} from "../../../enums/ESliStatus";
import {GrafanaService} from "../../services/grafana.service";
import {map} from "rxjs/operators";
import {IAlert} from "../../../interfaces/IAlert";
import {Observable} from "rxjs";

@Component({
  selector: 'app-sli-status-table',
  templateUrl: './sli-status-table.component.html',
})
export class SliStatusTableComponent implements OnInit {

  serviceLevelIndicators: IServiceLevelIndicator[] = [
    {
      id: 'fake',
      name: 'fake service test',
      nebulaStatus: this.getAlertStatus('4066e417-9ad4-4967-b512-a744b301682e'),
      gcpStatus: ESliStatus.UNMONITORED,
      tooltip: 'Tool tip test',
    },
    {
      name: 'Kubernetes API Server Latency (write)',
      nebulaStatus: this.getAlertStatus('42819512-bad3-40fa-93aa-b9e896afc69a'),
      gcpStatus: ESliStatus.UNMONITORED,
    },
    {
      name: 'Kubernetes API Server Latency (read)',
      nebulaStatus: this.getAlertStatus('3e5ad63d-fda1-468a-b9aa-3b7e984b98ab'),
      gcpStatus: ESliStatus.UNMONITORED,
    },
    {
      name: 'Kubernetes API Server Availability',
      nebulaStatus: this.getAlertStatus('371aa7ac-6133-4902-8cfc-59ea3af896d5'),
      gcpStatus: ESliStatus.UNMONITORED,
    },
  ]



  constructor(private grafanaService: GrafanaService) {
  }

  ngOnInit(): void {
  }

  getAlertStatus(id: string): Observable<string> {
    return this.grafanaService.getGrafanaAlertRules()
      .pipe(map((response: any) => response.data.alerts
        .filter((alert: IAlert) => alert.annotations.__alertId__ === id).map((alert: IAlert) => alert.state)));
  }
}
