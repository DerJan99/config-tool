import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root',
})
export class ElectronIpcService {
  public electronService = new ElectronService().ipcRenderer;

  public toggleDevTools(state: boolean): void {
    this.electronService.send('dev-tools', state);
  }
}
