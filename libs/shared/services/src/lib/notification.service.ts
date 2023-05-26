import { Injectable, NgZone } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ComponentType } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(
    private ngZone: NgZone,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  public openSnackbar(
    message: string,
    ctaContent: string,
    duration = 5000,
    horizontalPosition: MatSnackBarHorizontalPosition = 'center',
    verticalPosition: MatSnackBarVerticalPosition = 'bottom'
  ): void {
    this.ngZone.run(() => {
      this.snackBar.open(message, ctaContent, {
        duration: duration,
        horizontalPosition: horizontalPosition,
        verticalPosition: verticalPosition,
      });
    });
  }

  public openDialog(componentRef: ComponentType<any>): void {
    this.ngZone.run(() => {
      this.dialog.open(componentRef);
    });
  }
}
