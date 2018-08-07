import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostBrandComponent } from './post-brand.component';

describe('PostBrandComponent', () => {
  let component: PostBrandComponent;
  let fixture: ComponentFixture<PostBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
