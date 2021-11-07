import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomCardComponent } from './custom-plan/custom-card/custom-card.component';
import { CustomPlanComponent } from './custom-plan/custom-plan.component';
import { MealCardComponent } from './home/meal-card/meal-card.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MealCardComponent,
    CustomCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SocialLoginModule,
    NgbCarouselModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1056477865848-eerkusc92ic71bsgsb9bb7hij5klch3u.apps.googleusercontent.com' // add web app client id
            )
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
