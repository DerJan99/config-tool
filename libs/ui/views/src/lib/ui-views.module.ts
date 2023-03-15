import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiCommonModule } from '@config-tool/ui/common';

import { HomeComponent } from './home/home.component';
import { EventDetailsComponent } from './event-details/event-details.component';

@NgModule({
  imports: [CommonModule, UiCommonModule],
  declarations: [HomeComponent, EventDetailsComponent],
  exports: [HomeComponent, EventDetailsComponent],
})
export class UiViewsModule {}
