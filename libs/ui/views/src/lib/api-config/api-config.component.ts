import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface IApiConfig {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'config-tool-api-config',
  templateUrl: './api-config.component.html',
  styleUrls: ['./api-config.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiConfigComponent implements OnInit, AfterViewInit {
  public apiConfig: IApiConfig[] = [
    { value: 'antrago', viewValue: 'Antrago' },
    { value: 'web-api', viewValue: 'Web-API' },
  ];

  public formGroup: FormGroup = new FormGroup({
    oauth2: new FormControl({ value: '', disabled: true }),
    url: new FormControl(''),
    type: new FormControl(''),
    mandantId: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    token: new FormControl({ value: '', disabled: true }),
    enrollmentTimeout: new FormControl(''),
    rightsGroup: new FormControl(''),
  });

  ngOnInit() {
    this.formGroup.patchValue({});
  }

  ngAfterViewInit(): void {
    this.formGroup.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }
}
