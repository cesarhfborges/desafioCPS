import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResgatePersonalizadoComponent } from './resgate-personalizado.component';

describe('ResgatePersonalizadoComponent', () => {
  let component: ResgatePersonalizadoComponent;
  let fixture: ComponentFixture<ResgatePersonalizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResgatePersonalizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResgatePersonalizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
