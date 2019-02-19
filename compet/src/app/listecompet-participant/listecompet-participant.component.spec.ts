import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecompetParticipantComponent } from './listecompet-participant.component';

describe('ListecompetParticipantComponent', () => {
  let component: ListecompetParticipantComponent;
  let fixture: ComponentFixture<ListecompetParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListecompetParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecompetParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
