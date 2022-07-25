import {Component, OnInit} from '@angular/core';
import {IServiceLevelIndicator} from "../../../interfaces/IServiceLevelIndicator";
import {ESliStatus} from "../../../enums/ESliStatus";
import {GrafanaService} from "../../services/grafana.service";
import {map} from "rxjs/operators";
import {IAlert} from "../../../interfaces/IAlert";
import {Observable} from "rxjs";

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
})
export class StatusTableComponent implements OnInit {

  serviceLevelIndicators: IServiceLevelIndicator[] = [
    {
      name: 'Icon test 1',
      // nebulaStatus: ESliStatus.HEALTHY,
      gcpStatus: ESliStatus.WARNING,
    },
    {
      name: 'Icon test 2',
      // nebulaStatus: ESliStatus.INFO,
      gcpStatus: ESliStatus.ALERTING,
    },
    {
      name: 'Icon test 3',
      // nebulaStatus: ESliStatus.UNMONITORED,
      gcpStatus: ESliStatus.ERROR,
    },
    {
      id: 'fake',
      name: 'fake service test',
      nebulaStatus: this.getAlertStatus('4066e417-9ad4-4967-b512-a744b301682e'),
      gcpStatus: ESliStatus.UNMONITORED,
    },
    {
      name: 'Kubernetes API Server Latency (write)',
      nebulaStatus: this.getAlertStatus('42819512-bad3-40fa-93aa-b9e896afc69a'),
      gcpStatus: ESliStatus.UNMONITORED,
    },
    {
      name: 'API Server Latency (read)',
      // nebulaStatus: ESliStatus.UNMONITORED,
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
