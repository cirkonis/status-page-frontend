import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliStatusTableComponent } from './sli-status-table.component';

describe('StatusTableComponent', () => {
  let component: SliStatusTableComponent;
  let fixture: ComponentFixture<SliStatusTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliStatusTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliStatusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
