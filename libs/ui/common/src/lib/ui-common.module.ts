import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '@config-tool/shared/modules';

import { SidenavComponent } from './sidenav/sidenav.component';
import { RaisedButtonComponent } from './raised-button/raised-button.component';
import { BasicButtonComponent } from './basic-button/basic-button.component';
import { StrokedButtonComponent } from './stroked-button/stroked-button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { HelpTooltipComponent } from './help-tooltip/help-tooltip.component';
import { ReadConfigButtonComponent } from './read-config-button/read-config-button.component';

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: [
    SidenavComponent,
    RaisedButtonComponent,
    BasicButtonComponent,
    StrokedButtonComponent,
    IconButtonComponent,
    ExpansionPanelComponent,
    HelpTooltipComponent,
    ReadConfigButtonComponent,
  ],
  exports: [
    SidenavComponent,
    RaisedButtonComponent,
    BasicButtonComponent,
    StrokedButtonComponent,
    IconButtonComponent,
    ExpansionPanelComponent,
    HelpTooltipComponent,
    ReadConfigButtonComponent,
  ],
})
export class UiCommonModule {}
