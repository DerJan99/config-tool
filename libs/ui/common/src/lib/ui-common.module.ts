import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@config-tool/shared/modules';

import { SidenavComponent } from './sidenav/sidenav.component';
import { RaisedButtonComponent } from './raised-button/raised-button.component';
import { BasicButtonComponent } from './basic-button/basic-button.component';
import { StrokedButtonComponent } from './stroked-button/stroked-button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';

@NgModule({
  imports: [CommonModule, MaterialModule],
  declarations: [
    SidenavComponent,
    RaisedButtonComponent,
    BasicButtonComponent,
    StrokedButtonComponent,
    IconButtonComponent,
  ],
  exports: [SidenavComponent, RaisedButtonComponent],
})
export class UiCommonModule {}
