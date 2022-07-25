import {ESliStatus} from "../enums/ESliStatus";
import {Observable} from "rxjs";

export interface IServiceLevelIndicator {
  id?: string,
  name: string,
  nebulaStatus?: Observable<string>,
  gcpStatus: ESliStatus
}
