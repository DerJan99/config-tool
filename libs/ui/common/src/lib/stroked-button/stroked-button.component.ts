import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'config-tool-stroked-button',
  templateUrl: './stroked-button.component.html',
  styleUrls: ['./stroked-button.component.scss'],
})
export class StrokedButtonComponent {
  @Input() color: ThemePalette = 'primary';
  @Input() disabled = false;

  @Output() clickEvent = new EventEmitter<Event>();

  public handleClickEvent(event: MouseEvent): void {
    this.clickEvent.emit(event);
  }
}
