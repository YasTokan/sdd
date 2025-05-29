import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-section',
  templateUrl: './text-section.component.html',
  styleUrl: './text-section.component.css'
})
export class TextSectionComponent {

  @Input() smallTitle = '';
  @Input() mainTitle = '';
  @Input() description = '';
}

