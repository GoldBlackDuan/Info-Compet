import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnregcompetitionComponent } from './enregcompetition.component';

describe('EnregcompetitionComponent', () => {
  let component: EnregcompetitionComponent;
  let fixture: ComponentFixture<EnregcompetitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnregcompetitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnregcompetitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
