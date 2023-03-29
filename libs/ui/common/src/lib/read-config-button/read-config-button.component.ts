import { Component } from '@angular/core';
import {
  ElectronIpcService,
  SessionStorageService,
} from '@config-tool/shared/services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'config-tool-read-config-button',
  templateUrl: './read-config-button.component.html',
  styleUrls: ['./read-config-button.component.scss'],
})
export class ReadConfigButtonComponent {
  constructor(
    private electronIpc: ElectronIpcService,
    private sessionStorage: SessionStorageService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  public openFileDialog(): void {
    this.electronIpc.openFileExplorerWindows().subscribe((fileContent) => {
      this.sessionStorage.setItem('antrago-config', fileContent);
      this.checkIfConfigExists();
    });
  }

  private checkIfConfigExists(): void {
    if (this.sessionStorage.getItem('antrago-config')) {
      this.rerouteToOriginalView();
    }
  }

  private rerouteToOriginalView(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.router.navigate([params['returnUrl']]);
    });
  }
}
