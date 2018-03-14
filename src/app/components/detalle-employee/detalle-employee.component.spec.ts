import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEmployeeComponent } from './detalle-employee.component';

describe('DetalleEmployeeComponent', () => {
  let component: DetalleEmployeeComponent;
  let fixture: ComponentFixture<DetalleEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
