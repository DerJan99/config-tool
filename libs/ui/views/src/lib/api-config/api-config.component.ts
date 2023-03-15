import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'config-tool-api-config',
  templateUrl: './api-config.component.html',
  styleUrls: ['./api-config.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiConfigComponent {}
