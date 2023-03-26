import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormsNavComponent } from './user-forms-nav.component';

describe('RegistryNavComponent', () => {
  let component: UserFormsNavComponent;
  let fixture: ComponentFixture<UserFormsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormsNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
