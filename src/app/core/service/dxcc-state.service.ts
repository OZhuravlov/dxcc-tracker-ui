import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DxccStateService {
  private _baseUrl = environment.apiURL + '/dxcc';
  private _dxccTableUrl = this._baseUrl + '/table';

  constructor(private http: HttpClient) {
  }

  public getDxccTable(params: any): Observable<any> {
    const stub = new Observable<any>((observer) => {
      // observable execution
      observer.next(this.getStubResponse());
    })
    return stub;
    //    return this.http.get<any>(this._dxccTableUrl, {params})
    //      .pipe();
  }
  getStubResponse(): {} {
    return JSON.parse(`{
      "content": [
        {
          "countryId": 10,
          "countryName": "Kenya",
          "countryPrefix": "5Z",
          "confirmations": {
            "40m": {
              "confirmed": true
            },
            "30m": {
              "confirmed": true
            },
            "20m": {
              "confirmed": true
            },
            "15m": {
              "calls": "5Z4AC"
            }
          }
        },
        {
          "countryId": 11,
          "countryName": "Senegal",
          "countryPrefix": "6W"
        },
		{
          "countryId": 12,
          "countryName": "Malawi",
          "countryPrefix": "7Q",
          "confirmations": {
            "160m": {
              "confirmed": true
            },
            "80m": {
              "confirmed": true
            },
            "6m": {
              "confirmed": true
            },
            "12m": {
              "calls": "7Q7EMH"
            },
            "17m": {
              "calls": "7Q7EMN"
            },
            "10m": {
              "confirmed": true
            }
          }
        }
      ],
      "totalElements": 3
    }`);
  }

  /*public getByName(params: any): Observable<any> {
    return this.http.get<any>(this._getByNameUrl, {params})
      .pipe();
  }

  public getInfo(stationFid: number) {
    const url = `${this._baseUrl}/${stationFid}/info`;
    return this.http.get<any>(url)
      .pipe();
  }*/
}
