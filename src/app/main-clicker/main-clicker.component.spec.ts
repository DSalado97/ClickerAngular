import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainClickerComponent } from './main-clicker.component';

describe('MainClickerComponent', () => {
  let component: MainClickerComponent;
  let fixture: ComponentFixture<MainClickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainClickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainClickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
