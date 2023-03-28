import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SessionStorageService } from '@config-tool/shared/services';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class ConfigGuard implements CanActivate {
  constructor(
    private router: Router,
    private sessionStorage: SessionStorageService,
    private snackBar: MatSnackBar
  ) {}

  canActivate(): boolean {
    if (this.sessionStorage.getItem('config')) return true;

    this.router.navigate(['/load-config']);
    this.snackBar.open('Bitte zuerst die antrago-config.json einlesen', 'OK', {
      duration: 5000,
    });
    return false;
  }
}
