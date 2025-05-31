import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  mobileMenuOpen = false;
  scrolled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrolled = window.scrollY > 30; // threshold in px
  }
  toggleMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMenu() {
    this.mobileMenuOpen = false;
  }

  constructor(public translate: TranslateService) {

  }


  showAccessibilityPanel = false;

  toggleAccessibilityPanel() {
    this.showAccessibilityPanel = !this.showAccessibilityPanel;
  }


  get isRtl(): boolean {
    return this.translate.currentLang === 'ar';
  }
  switchLang(lang: string) {
    document.documentElement.lang = lang;
    this.translate.use(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';


    document.body.classList.toggle('rtl', lang === 'ar');
  }



  switchLangTrans(tlang?: string) {
    let lang = "en"
    if (tlang == "العربية") {
      lang = 'ar'
    }
    document.documentElement.lang = lang;
    this.translate.use(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';


    document.body.classList.toggle('rtl', lang === 'ar');
  }

  textSizes = [
    { key: 'xs', label: 'A--' },
    { key: 'sm', label: 'A-' },
    { key: 'md', label: 'A' },
    { key: 'lg', label: 'A+' },
    { key: 'xl', label: 'A++' }
  ];

  activeFontSize: string = 'md';

  setFontSize(size: string) {
    this.activeFontSize = size;

    // Apply class to <html> or <body> globally
    const htmlEl = document.documentElement;
    htmlEl.classList.remove('text-xs', 'text-sm', 'text-md', 'text-lg', 'text-xl');
    htmlEl.classList.add(`text-${size}`);
  }


  contrastOptions = [
    { key: 'default', label: 'ACCESSIBILITY.CONTRAST.OPTION_DEFAULT' },
    { key: 'color-blind', label: 'ACCESSIBILITY.CONTRAST.OPTION_COLORBLIND' },
    { key: 'green', label: 'ACCESSIBILITY.CONTRAST.OPTION_GREEN' }
  ];

  selectedContrast: string = 'default';

  setContrast(key: string) {
    this.selectedContrast = key;

    const htmlEl = document.documentElement;
    htmlEl.classList.remove('theme-default', 'theme-color-blind', 'theme-green');
    htmlEl.classList.add(`theme-${key}`);
  }


  jumpToSection(section: string | null) {
    this.closeMenu()
    if (section) document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }


  sections: any;
  navLi: any;

  ngOnInit() {
    this.sections = document.querySelectorAll('section');
    this.navLi = document.querySelectorAll('nav .container .navigation ul li');
  }


}
