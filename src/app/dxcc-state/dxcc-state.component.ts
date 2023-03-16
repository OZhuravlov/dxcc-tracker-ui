import { Component, OnInit } from '@angular/core';
import { DxccRowData } from '../core/shared/dxcc-row-data';
import { Constants } from '../core/shared/constants';
import { DxccStateService } from '../core/service/dxcc-state.service';
//import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {LoadingService} from "../core/service/loading.service";
import { Band } from '../core/shared/band';
import { Confirmation } from '../core/shared/confirmation';
import { BandType } from '../core/shared/band-type';

@Component({
  selector: 'app-dxcc-state',
  templateUrl: './dxcc-state.component.html',
  styleUrls: ['./dxcc-state.component.css']
})

export class DxccStateComponent implements OnInit {
  dxccRows: DxccRowData[] = [];
  pageSizes: number[] = Constants.PAGE_SIZES;
  pageSize = Constants.DEFAULT_PAGE_SIZE;
  total = 0;
  page = 1;
  selectedDxccRow!: DxccRowData;
  loading$ = this.loader.loading$;
  bands;

  private _searchTerm: string = '';
  private _closeResult!: string;

  constructor(private dxccStateService: DxccStateService,
              //private modalService: NgbModal,
              private loader: LoadingService) {
      this.bands = Object.values(Band)
      .filter(band => band["bandType"] == BandType.HF)
      .map(band => band["band"]);
  }

  ngOnInit(): void {
    this.retrieveDxccTable();
  }

  handlePageChange(page: any): void {
    this.page = page;
    this.retrieveDxccTable();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveDxccTable();
  }

  onSelect(dxccRow: DxccRowData/*, infoContent: any*/) {
    this.selectedDxccRow = dxccRow;
    //this.retrieveStationInfo(infoContent);
  }

  getConfirmed(dxccRow: DxccRowData, band: Band) {
     if (dxccRow && dxccRow.confirmations && dxccRow.confirmations.get(band) && dxccRow.confirmations.get(band)?.confirmed){
      return dxccRow.countryPrefix;
     }
     return '';
  }

  getCallSigns(dxccRow: DxccRowData, band: Band) {
    if (dxccRow && dxccRow.confirmations && dxccRow.confirmations.get(band)){
     return dxccRow.confirmations.get(band)?.confirmed ? '' : dxccRow.confirmations.get(band)?.calls||'';
    }
    return '';
 }

  get searchTerm() {
    return this._searchTerm;
  }

  set searchTerm(searchTerm: string) {
    this._searchTerm = searchTerm;
    this.retrieveDxccTable();
  }

  private retrieveDxccTable(): void {
    let params: any = {};
    params[`user_id`] = 1;
    this.dxccStateService.getDxccTable(params)
      .subscribe({
        next: response => {
          this.dxccRows = this._getDxccRows(response);
          this.total = response.length;
        },
        error: (e) => console.error(e)
      });
  }

  private _getDxccRows(content: any): DxccRowData[] {
    let rowData: DxccRowData[] = [];
    (content || []).forEach((row: any) => {
      const origConfirmations = row.confirmations;
      const confirmations = new Map<Band, Confirmation>();
      if (origConfirmations) {
        Object.keys(origConfirmations).forEach((key) => {
          const band: Band = key.toLocaleLowerCase();
          const confirmation: Confirmation = origConfirmations[key];
          confirmations.set(band, confirmation);
        });
      }
      const dxccRow = new DxccRowData(row.countryId, row.countryName, row.countryPrefix, confirmations);
      rowData.push(dxccRow);
    });
    return rowData;
  }

/*  private retrieveStationInfo(infoContent: any): void {
    this.loader.show();
    this.stationService.getInfo(this.selectedStation.fid)
      .subscribe({
        next: response => {
          this.periodStationInfo = response;
          this.loader.hide();
          this.modalService.open(infoContent,
            {ariaLabelledBy: 'modal-basic-title', size: 'lg', fullscreen: 'lg'}).result.then((result) => {
            this._closeResult = `Closed with: ${result}`;
          }, (reason) => {
            this._closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          });
        },
        error: (e) => console.error(e)
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
*/
}
