import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SanJoComponent } from './san-jo.component';

describe('SanJoComponent', () => {
  let component: SanJoComponent;
  let fixture: ComponentFixture<SanJoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SanJoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SanJoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
