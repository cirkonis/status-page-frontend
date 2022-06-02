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
      name: 'test',
      nebulaStatus: ESliStatus.HEALTHY,
      gcpStatus: ESliStatus.UNMONITORED,
    },
    {
      name: 'API Server Latency (write)',
      nebulaStatus: ESliStatus.HEALTHY,
      gcpStatus: ESliStatus.UNMONITORED,
    },
    {
      name: 'API Server Latency (read)',
      nebulaStatus: ESliStatus.HEALTHY,
      gcpStatus: ESliStatus.UNMONITORED,
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
