import { Band } from './band';
import { Confirmation } from './confirmation';

export class DxccRowData {
  constructor(public countryId: number,
              public countryName: string,
              public countryPrefix: string,
              public confirmations: Map<Band, Confirmation>){}
}
