import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrl: './hero-banner.component.css'
})
export class HeroBannerComponent {


  isPopupVisible = false;

  togglePopup(state: boolean) {
    this.isPopupVisible = state;
  }

  is190 = false;
  toggle190() {
    this.is190 = !this.is190
  }

  is20 = false;
  toggle20() {
    this.is20 = !this.is20
  }

  is200 = false;
  toggle200() {
    this.is200 = !this.is200
  }
}
