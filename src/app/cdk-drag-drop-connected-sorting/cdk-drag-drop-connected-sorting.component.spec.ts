import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdkDragDropConnectedSortingComponent } from './cdk-drag-drop-connected-sorting.component';

describe('CdkDragDropConnectedSortingComponent', () => {
  let component: CdkDragDropConnectedSortingComponent;
  let fixture: ComponentFixture<CdkDragDropConnectedSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdkDragDropConnectedSortingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdkDragDropConnectedSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
