import {Component, OnInit} from '@angular/core';
import {IServiceLevelIndicator} from "../../../interfaces/IServiceLevelIndicator";
import {ESliStatus} from "../../../enums/ESliStatus";
import {GrafanaService} from "../../services/grafana.service";
import {map} from "rxjs/operators";
import {IAlert} from "../../../interfaces/IAlert";

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
})
export class StatusTableComponent implements OnInit {

  testData!: string;

  fakeAlert!: IServiceLevelIndicator;

  serviceLevelIndicators: IServiceLevelIndicator[] = [
    {
      name: 'Icon test 1',
      nebulaStatus: ESliStatus.HEALTHY,
      gcpStatus: ESliStatus.WARNING,
    },
    {
      name: 'Icon test 2',
      nebulaStatus: ESliStatus.INFO,
      gcpStatus: ESliStatus.ALERTING,
    },
    {
      name: 'Icon test 3',
      nebulaStatus: ESliStatus.UNMONITORED,
      gcpStatus: ESliStatus.ERROR,
    },
    {
      id: 'fake',
      name: 'fake service test',
      nebulaStatus: ESliStatus.UNMONITORED,
      gcpStatus: ESliStatus.UNMONITORED,
    },
    {
      name: 'API Server Latency (write)',
      nebulaStatus: ESliStatus.UNMONITORED,
      gcpStatus: ESliStatus.UNMONITORED,
    },
    {
      name: 'API Server Latency (read)',
      nebulaStatus: ESliStatus.UNMONITORED,
      gcpStatus: ESliStatus.UNMONITORED,
    },
  ]


  constructor(private grafanaService: GrafanaService) {
  }

  ngOnInit(): void {
    this.getAlertStatus('0-DLy2Unz');
  }

  getAlertStatus(id: string) {
    let thing = this.grafanaService.getGrafanaAlertRules().pipe(map((response: any) => response.data.alerts.filter((alert: IAlert) => alert.annotations.__dashboardUid__ === id)));
    thing.subscribe((alert: IAlert[]) => console.log(alert[0].state));
  }
}
