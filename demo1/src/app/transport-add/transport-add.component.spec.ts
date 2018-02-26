import { FormsModule } from '@angular/forms';
import { TransportFormComponent } from './../transport-form/transport-form.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportAddComponent } from './transport-add.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('TransportAddComponent', () => {
  let component: TransportAddComponent;
  let fixture: ComponentFixture<TransportAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, RouterTestingModule],
      declarations: [ TransportAddComponent, TransportFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
