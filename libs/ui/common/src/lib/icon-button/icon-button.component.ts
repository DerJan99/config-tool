import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'config-tool-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconButtonComponent {
  @Input() color: ThemePalette = 'primary';
  @Input() disabled = false;

  @Output() clickEvent = new EventEmitter<Event>();

  public handleClickEvent(event: MouseEvent): void {
    this.clickEvent.emit(event);
  }
}
