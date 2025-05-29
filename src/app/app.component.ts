import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SDD';
  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'en';

    this.translate.setDefaultLang(savedLang);
    this.translate.use(savedLang);

    document.documentElement.lang = savedLang;
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('rtl', savedLang === 'ar');
  }
}
