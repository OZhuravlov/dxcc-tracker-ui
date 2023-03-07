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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DxccStateComponent,
    FilterMgmtComponent,
    NotificationsComponent,
    UserProfileComponent,
    QsoMgmtComponent,
    AdministrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
