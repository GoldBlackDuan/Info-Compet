import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCompetitonParticipantComponent } from './detail-competiton-participant.component';

describe('DetailCompetitonParticipantComponent', () => {
  let component: DetailCompetitonParticipantComponent;
  let fixture: ComponentFixture<DetailCompetitonParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailCompetitonParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCompetitonParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
