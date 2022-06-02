import {Component, OnInit} from '@angular/core';
import {IServiceLevelIndicator} from "../../../interfaces/IServiceLevelIndicator";
import {ESliStatus} from "../../../enums/ESliStatus";

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
})
export class StatusTableComponent implements OnInit {

  sli: IServiceLevelIndicator[] = [
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
      name: 'test',
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


  constructor() { }

  ngOnInit(): void {
  }

}
