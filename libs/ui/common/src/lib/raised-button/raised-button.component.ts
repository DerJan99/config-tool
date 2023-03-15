import {Component, ChangeDetectionStrategy, Input, EventEmitter, Output} from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'config-tool-raised-button',
  templateUrl: './raised-button.component.html',
  styleUrls: ['./raised-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RaisedButtonComponent {
  @Input() color: ThemePalette = "primary";
  @Input() disabled = false;

  @Output() clickEvent = new EventEmitter<Event>();

  public handleClickEvent(event: MouseEvent): void {
    this.clickEvent.emit(event);
  }
}
