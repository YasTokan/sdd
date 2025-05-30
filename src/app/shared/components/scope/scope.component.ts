import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrl: './scope.component.css'
})
export class ScopeComponent {


  scopeArr = [
    {
      titleKey: 'SCOPE.G2G.TITLE',
      descriptionKey: 'SCOPE.G2G.DESC',
      number: '01',
      iconSrc: 'assets/icons/grey/government.svg'  
    },
    {
      titleKey: 'SCOPE.G2U.TITLE',
      descriptionKey: 'SCOPE.G2U.DESC',
      number: '02',
      iconSrc: 'assets/icons/grey/users.svg'
    },
    {
      titleKey: 'SCOPE.SECURITY.TITLE',
      descriptionKey: 'SCOPE.SECURITY.DESC',
      number: '03',
      iconSrc: 'assets/icons/grey/shield.svg'
    },
    {
      titleKey: 'SCOPE.AI.TITLE',
      descriptionKey: 'SCOPE.AI.DESC',
      number: '04',
      iconSrc: 'assets/icons/grey/ai.svg'
    }
  ];


  /* scopeArr = [
    {
      title: "Government to Government Solutions",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      number: "01",
      iconSrc: "assets/icons/government.svg"
    },
    {
      title: "Government to Users Solutions",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      number: "02",
      iconSrc: "assets/icons/users.svg"
    },
    {
      title: "Safeguard and Cybersecurity",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      number: "03",
      iconSrc: "assets/icons/shield.svg"
    },
    {
      title: "AI and Machine Learning",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      number: "04",
      iconSrc: "assets/icons/ai.svg" // <-- update this path as needed
    },
    
  ]; */
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
