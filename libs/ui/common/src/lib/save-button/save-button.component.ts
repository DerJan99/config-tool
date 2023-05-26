import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'config-tool-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss'],
})
export class SaveButtonComponent {
  @Output() public saveEvent: EventEmitter<void> = new EventEmitter();

  constructor() {}

  public handleClickEvent(): void {
    this.saveEvent.emit();
  }
}
