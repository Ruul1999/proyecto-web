import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmtypagesComponent } from './emtypages.component';

describe('EmtypagesComponent', () => {
  let component: EmtypagesComponent;
  let fixture: ComponentFixture<EmtypagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmtypagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmtypagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
