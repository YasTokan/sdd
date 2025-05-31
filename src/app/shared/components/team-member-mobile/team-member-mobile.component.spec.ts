import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMemberMobileComponent } from './team-member-mobile.component';

describe('TeamMemberMobileComponent', () => {
  let component: TeamMemberMobileComponent;
  let fixture: ComponentFixture<TeamMemberMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeamMemberMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeamMemberMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
