import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsPanelComponent } from './items-panel.component';

describe('ItemsPanelComponent', () => {
  let component: ItemsPanelComponent;
  let fixture: ComponentFixture<ItemsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
