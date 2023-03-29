import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadConfigButtonComponent } from './read-config-button.component';

describe('ReadConfigButtonComponent', () => {
  let component: ReadConfigButtonComponent;
  let fixture: ComponentFixture<ReadConfigButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadConfigButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadConfigButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
