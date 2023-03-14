import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import {UiCommonModule} from "@config-tool/ui/common";

@NgModule({
  imports: [CommonModule, UiCommonModule],
  declarations: [HomeComponent],
  exports: [HomeComponent],
})
export class UiViewsModule {}
