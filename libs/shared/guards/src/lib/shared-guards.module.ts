import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigGuard } from './config/config.guard';

@NgModule({
  imports: [CommonModule],
  providers: [ConfigGuard],
})
export class SharedGuardsModule {}
