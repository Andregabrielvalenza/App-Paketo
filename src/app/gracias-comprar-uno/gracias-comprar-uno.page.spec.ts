import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GraciasComprarUnoPage } from './gracias-comprar-uno.page';

describe('GraciasComprarUnoPage', () => {
  let component: GraciasComprarUnoPage;
  let fixture: ComponentFixture<GraciasComprarUnoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GraciasComprarUnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GraciasComprarUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
