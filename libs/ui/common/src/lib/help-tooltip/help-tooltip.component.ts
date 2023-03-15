import { Component, Input } from '@angular/core';

@Component({
  selector: 'config-tool-help-tooltip',
  templateUrl: './help-tooltip.component.html',
  styleUrls: ['./help-tooltip.component.scss'],
})
export class HelpTooltipComponent {
  @Input() tooltipContent = '';
}
