import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaiparticipantComponent } from './detaiparticipant.component';

describe('DetaiparticipantComponent', () => {
  let component: DetaiparticipantComponent;
  let fixture: ComponentFixture<DetaiparticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaiparticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaiparticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
