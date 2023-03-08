import {Component, EventEmitter, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const defaultLang = 'en';
    const browserLang = translate.getBrowserLang() || defaultLang;
    translate.use(browserLang.match(/en|uk/) ? browserLang : defaultLang);
  }


  show(feature: string) {
    this.featureSelected.emit(feature);
  }
}
