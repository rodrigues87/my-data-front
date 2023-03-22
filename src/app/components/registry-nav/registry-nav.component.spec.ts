import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryNavComponent } from './registry-nav.component';

describe('RegistryNavComponent', () => {
  let component: RegistryNavComponent;
  let fixture: ComponentFixture<RegistryNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistryNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistryNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
