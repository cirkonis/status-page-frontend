import {Component, Input} from '@angular/core';
import {ESliStatus} from "../../../../enums/ESliStatus";

@Component({
  selector: 'app-table-cell-icon',
  templateUrl: './table-cell-icon.component.html',
})
export class TableCellIconComponent {
  @Input() sliStatus!: ESliStatus
  sliStatuses = ESliStatus;
}
