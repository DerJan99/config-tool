import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
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

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.sessionStorage.getItem('antrago-config')) return true;

    this.router.navigate(['/read-config'], {
      queryParams: { returnUrl: state.url },
    });
    this.snackBar.open('Bitte zuerst die antrago-config.json einlesen', 'OK', {
      duration: 5000,
    });
    return false;
  }
}
