import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTutorialNavComponent } from './user-tutorial-nav.component';

describe('RegistryNavComponent', () => {
  let component: UserTutorialNavComponent;
  let fixture: ComponentFixture<UserTutorialNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTutorialNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTutorialNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
