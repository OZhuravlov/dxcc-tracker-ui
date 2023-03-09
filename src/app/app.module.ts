import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DxccStateComponent } from './dxcc-state/dxcc-state.component';
import { FilterMgmtComponent } from './filter-mgmt/filter-mgmt.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { QsoMgmtComponent } from './qso-mgmt/qso-mgmt.component';
import { AdministrationComponent } from './administration/administration.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {NgbdSortableHeader} from './core/directive/sortable-qso.directive';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxMatDatetimePickerModule, NgxMatNativeDateModule} from "@angular-material-components/datetime-picker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatToolbarModule} from "@angular/material/toolbar";


export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DxccStateComponent,
    FilterMgmtComponent,
    NotificationsComponent,
    UserProfileComponent,
    QsoMgmtComponent,
    AdministrationComponent,
    NgbdSortableHeader
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgxMatDatetimePickerModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    NgxMatNativeDateModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [NgxMatNativeDateModule, MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
