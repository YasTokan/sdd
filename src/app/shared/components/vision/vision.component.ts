import { Component } from '@angular/core';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrl: './vision.component.css'
})
export class VisionComponent {


  teamMembers = [
    {
      image: 'assets/media/images/people/shik.saud.jpg',
      name: 'TEAM.PERSON_1.NAME',
      role: 'TEAM.PERSON_1.ROLE'
    },
    {
      image: 'assets/media/images/people/eng.lamia.jpg',
      name: 'TEAM.PERSON_2.NAME',
      role: 'TEAM.PERSON_2.ROLE'
    },

  ];
}
