import { Injectable } from '@angular/core';
import { SessionStorageService } from './session-storage.service';
import { ElectronIpcService } from './electron-ipc.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root',
})
export class ConfigSaveService {
  constructor(
    private sessionStorage: SessionStorageService,
    private electronIpcService: ElectronIpcService,
    private notificationService: NotificationService
  ) {}

  public save(patchedValues, keyToReplace: string): boolean {
    try {
      const config = JSON.parse(this.sessionStorage.getItem('antrago-config'));
      if (keyToReplace) {
        config[keyToReplace] = patchedValues;
      }
      const stringifiedConfig = JSON.stringify(config, null, 2);

      this.sessionStorage.setItem('antrago-config', stringifiedConfig);
      this.electronIpcService.saveFileExplorerWindows(stringifiedConfig);
    } catch {
      return false;
    }
    return true;
  }
}
