import { Component, isDevMode } from '@angular/core';

import { ElectronIpcService } from '@config-tool/shared/services';

@Component({
  selector: 'config-tool-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  constructor(private ipcRenderer: ElectronIpcService) {}

  public iconObj = {
    open: {
      icon: 'code',
      text: 'öffnen',
    },
    close: {
      icon: 'code_off',
      text: 'schließen',
    },
  };
  public devToolsState = false;

  public toggleDevTools(): void {
    this.ipcRenderer.toggleDevTools(!this.devToolsState);
    this.devToolsState = !this.devToolsState;
  }

  public isProduction(): boolean {
    return isDevMode();
  }
}
