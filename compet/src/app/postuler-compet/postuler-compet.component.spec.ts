import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulerCompetComponent } from './postuler-compet.component';

describe('PostulerCompetComponent', () => {
  let component: PostulerCompetComponent;
  let fixture: ComponentFixture<PostulerCompetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostulerCompetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulerCompetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
