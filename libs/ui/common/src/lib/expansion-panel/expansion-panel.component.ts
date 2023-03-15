import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'config-tool-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExpansionPanelComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() suffixIcon = '';
  @Input() expanded = false;
  @Input() disabled = false;

  @Output() expandedChange = new EventEmitter<boolean>();
}
