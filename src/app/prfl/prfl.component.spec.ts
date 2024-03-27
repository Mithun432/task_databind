import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrflComponent } from './prfl.component';

describe('PrflComponent', () => {
  let component: PrflComponent;
  let fixture: ComponentFixture<PrflComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrflComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
