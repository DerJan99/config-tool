import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Observable, Subject } from 'rxjs';

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

  private listen(channel: string): Observable<string> {
    const subject = new Subject<string>();
    if (this.electronService) {
      this.electronService.on(channel, (event, fileContent: string) => {
        subject.next(fileContent);
        subject.complete();
      });
    }
    return subject.asObservable();
  }

  public toggleDevTools(state: boolean): void {
    this.send('dev-tools', state);
  }

  public openFileExplorerWindows(): Observable<string> {
    this.send('file-request');
    return this.listen('file');
  }
}
