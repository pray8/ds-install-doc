import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-feedback',
  templateUrl: './page-feedback.component.html',
  styleUrls: ['./page-feedback.component.scss']
})
export class PageFeedbackComponent {
  @Input() lastUpdated?: Date;
}
