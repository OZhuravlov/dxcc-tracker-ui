import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() featureSelected = new EventEmitter<string>();

  show(feature: string) {
    this.featureSelected.emit(feature);
  }
}
