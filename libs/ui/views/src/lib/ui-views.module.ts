import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UiCommonModule } from '@config-tool/ui/common';
import { MaterialModule } from '@config-tool/shared/modules';

import { HomeComponent } from './home/home.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { ApiConfigComponent } from './api-config/api-config.component';
import { ReadConfigComponent } from './read-config/read-config.component';

@NgModule({
  imports: [CommonModule, UiCommonModule, MaterialModule, ReactiveFormsModule],
  declarations: [
    HomeComponent,
    EventDetailsComponent,
    ApiConfigComponent,
    ReadConfigComponent,
  ],
  exports: [
    HomeComponent,
    EventDetailsComponent,
    ApiConfigComponent,
    ReadConfigComponent,
  ],
})
export class UiViewsModule {}
