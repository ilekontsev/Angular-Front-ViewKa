import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDialoguesComponent } from './list-dialogues.component';

describe('ListDialoguesComponent', () => {
  let component: ListDialoguesComponent;
  let fixture: ComponentFixture<ListDialoguesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDialoguesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDialoguesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
