import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'config-tool-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public consoler(msg: Event): void {
    console.log(msg);
  }
}
