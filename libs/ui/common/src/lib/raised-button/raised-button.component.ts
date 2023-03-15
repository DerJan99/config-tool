import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'config-tool-raised-button',
  templateUrl: './raised-button.component.html',
  styleUrls: ['./raised-button.component.scss'],
})
export class RaisedButtonComponent {
  @Input() color: ThemePalette = 'primary';
  @Input() disabled = false;

  @Output() clickEvent = new EventEmitter<Event>();

  public handleClickEvent(event: MouseEvent): void {
    this.clickEvent.emit(event);
  }
}
