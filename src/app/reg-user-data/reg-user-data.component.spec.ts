import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegUserDataComponent } from './reg-user-data.component';

describe('RegUserDataComponent', () => {
  let component: RegUserDataComponent;
  let fixture: ComponentFixture<RegUserDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegUserDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegUserDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
