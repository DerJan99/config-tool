import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'config-tool-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}