import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-theme-btn',
  templateUrl: './theme-btn.component.html',
  styleUrls: ['./theme-btn.component.scss'],
})
export class ThemeBtnComponent {
  @Input() btnText: string = 'Theme';
  @Input() btnType: string = 'button';
  @Input() btnDisabled: boolean = false;
  @Output() btnClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  handleClickEvent() {
    this.btnClick.emit();
  }
}
