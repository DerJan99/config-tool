import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'config-tool-basic-button',
  templateUrl: './basic-button.component.html',
  styleUrls: ['./basic-button.component.scss'],
})
export class BasicButtonComponent {
  @Input() color: ThemePalette = 'primary';
  @Input() disabled = false;

  @Output() clickEvent = new EventEmitter<Event>();

  public handleClickEvent(event: MouseEvent): void {
    this.clickEvent.emit(event);
  }
}
