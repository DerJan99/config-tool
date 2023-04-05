import { Component } from '@angular/core';
import {
  ElectronIpcService,
  SessionStorageService,
} from '@config-tool/shared/services';

@Component({
  selector: 'config-tool-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss'],
})
export class SaveButtonComponent {
  constructor(
    private ipcRenderer: ElectronIpcService,
    private sessionStorage: SessionStorageService
  ) {}

  public handleClickEvent(): void {
    const config: string = this.sessionStorage.getItem('antrago-config');
    const prettyPrintedConfig: string = JSON.stringify(
      JSON.parse(config),
      null,
      2
    );

    if (prettyPrintedConfig)
      this.ipcRenderer.saveFileExplorerWindows(prettyPrintedConfig);
  }
}
