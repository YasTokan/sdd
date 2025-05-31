import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-member-mobile',
  templateUrl: './team-member-mobile.component.html',
  styleUrl: './team-member-mobile.component.css'
})
export class TeamMemberMobileComponent {
 @Input() member!: { image: string; name: string; role: string };
}
