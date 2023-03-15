import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'config-tool-help-tooltip',
  templateUrl: './help-tooltip.component.html',
  styleUrls: ['./help-tooltip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpTooltipComponent {
  @Input() tooltipContent = '';
}