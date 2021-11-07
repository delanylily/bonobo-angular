import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    NgbCarouselModule,
    CommonModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
