import { Component, isDevMode } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'config-tool-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  private electronService = new ElectronService();

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
    this.electronService.ipcRenderer.send('dev-tools', !this.devToolsState);
    this.devToolsState = !this.devToolsState;
  }

  public isProduction(): boolean {
    return isDevMode();
  }
}
