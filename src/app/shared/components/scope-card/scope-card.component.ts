import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-scope-card',
  templateUrl: './scope-card.component.html',
  styleUrl: './scope-card.component.css'
})
export class ScopeCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() iconSrc = '';
  @Input() number = '';

  isHovered = false;


  get greenIconSrc(): string {
    return this.iconSrc.replace('/grey/', '/green/');
  }

}
