import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryDetailsComponent } from './entry-details.component';

describe('EntryDetailsComponent', () => {
  let component: EntryDetailsComponent;
  let fixture: ComponentFixture<EntryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntryDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
