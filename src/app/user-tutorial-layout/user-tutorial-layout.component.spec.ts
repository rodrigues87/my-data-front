import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTutorialLayoutComponent } from './user-tutorial-layout.component';

describe('UserTutorialLayoutComponent', () => {
  let component: UserTutorialLayoutComponent;
  let fixture: ComponentFixture<UserTutorialLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTutorialLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserTutorialLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
