import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadConfigComponent } from './read-config.component';

describe('ReadConfigComponent', () => {
  let component: ReadConfigComponent;
  let fixture: ComponentFixture<ReadConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadConfigComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
