import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Injectable({
  providedIn: 'root',
})
export class ElectronIpcService {
  public electronService = new ElectronService().ipcRenderer;

  private send(channel: string, ...args: any): void {
    if (this.electronService) {
      this.electronService.send(channel, ...args);
    }
  }

  private listen(channel: string, listener: (...args: any) => void): void {
    if (this.electronService) {
      this.electronService.on(channel, listener);
    }
  }

  public toggleDevTools(state: boolean): void {
    this.send('dev-tools', state);
  }
}
