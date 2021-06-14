import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TireContainerComponent } from './tire-container.component';

describe('TireContainerComponent', () => {
  let component: TireContainerComponent;
  let fixture: ComponentFixture<TireContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TireContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TireContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
