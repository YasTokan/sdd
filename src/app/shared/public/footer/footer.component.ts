import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  jumpToSection(section: string | null) {
    if (section) document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  }


  sections: any;
  navLi: any;

  ngOnInit() {
    this.sections = document.querySelectorAll('section');
    this.navLi = document.querySelectorAll('nav .container .navigation ul li');
  }
}
