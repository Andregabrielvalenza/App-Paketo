import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OnboardingNoUsuarioUnoPage } from './onboarding-no-usuario-uno.page';

describe('OnboardingNoUsuarioUnoPage', () => {
  let component: OnboardingNoUsuarioUnoPage;
  let fixture: ComponentFixture<OnboardingNoUsuarioUnoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingNoUsuarioUnoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OnboardingNoUsuarioUnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
