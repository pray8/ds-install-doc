import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshInstallComponent } from './fresh-install.component';

describe('FreshInstallComponent', () => {
  let component: FreshInstallComponent;
  let fixture: ComponentFixture<FreshInstallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshInstallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreshInstallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
