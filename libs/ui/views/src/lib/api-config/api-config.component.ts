import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SessionStorageService } from '@config-tool/shared/services';

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
export class ApiConfigComponent implements AfterViewInit {
  public passwordInputType = true;
  public apiConfigSelectOptions: IApiConfig[] = [
    { value: 'ANTRAGO_BACKEND', viewValue: 'Antrago' },
    { value: 'WEB_API', viewValue: 'Web-API' },
    { value: 'NONE', viewValue: 'Kein Backend' },
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

  constructor(private sessionStorage: SessionStorageService) {
    const serializedConfig = this.sessionStorage.getItem('antrago-config');
    if (serializedConfig) {
      this.formGroup.patchValue(JSON.parse(serializedConfig).api);
    }
  }

  ngAfterViewInit(): void {
    this.formGroup.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  public togglePasswordInputType(): void {
    this.passwordInputType = !this.passwordInputType;
  }
}
