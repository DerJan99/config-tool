import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiCommonModule } from '@config-tool/ui/common';

import { HomeComponent } from './home/home.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ApiConfigComponent } from './api-config/api-config.component';

@NgModule({
  imports: [CommonModule, UiCommonModule],
  declarations: [HomeComponent, EventDetailsComponent, ApiConfigComponent],
  exports: [HomeComponent, EventDetailsComponent, ApiConfigComponent],
})
export class UiViewsModule {}
