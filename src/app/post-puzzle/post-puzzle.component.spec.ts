import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPuzzleComponent } from './post-puzzle.component';

describe('PostPuzzleComponent', () => {
  let component: PostPuzzleComponent;
  let fixture: ComponentFixture<PostPuzzleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPuzzleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
