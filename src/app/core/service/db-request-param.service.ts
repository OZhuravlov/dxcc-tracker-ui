import {Injectable} from '@angular/core';
import {SortColumn, SortDirection} from "../directive/sortable-qso.directive";

@Injectable({
  providedIn: 'root'
})
export class DbRequestParamService {
  constructor() {
  }

  public static getRequestParams(page: number, pageSize: number,
                                 sortColumn?: SortColumn, sortDirection?: SortDirection): any {
    let params: any = {};
    if (page) {
      params[`page`] = page - 1;
    }
    if (pageSize) {
      params[`size`] = pageSize;
    }

    if (sortColumn !== '' && sortDirection !== '') {
      params['sortColumn'] = sortColumn;
      params['sortDirection'] = sortDirection;
    }
    return params;
  }
}
