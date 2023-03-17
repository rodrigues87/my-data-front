import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryStarterComponent } from './registry-starter.component';

describe('RegistryStarterComponent', () => {
  let component: RegistryStarterComponent;
  let fixture: ComponentFixture<RegistryStarterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistryStarterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistryStarterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
