import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteBannerComponent } from './route-banner.component';

describe('CartComponent', () => {
  let component: RouteBannerComponent;
  let fixture: ComponentFixture<RouteBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
