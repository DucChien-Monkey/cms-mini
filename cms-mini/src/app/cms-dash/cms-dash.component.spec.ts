import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsDashComponent } from './cms-dash.component';

describe('CmsDashComponent', () => {
  let component: CmsDashComponent;
  let fixture: ComponentFixture<CmsDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
