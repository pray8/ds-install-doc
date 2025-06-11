import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-feedback',
  templateUrl: './page-feedback.component.html',
  styleUrls: ['./page-feedback.component.scss']
})
export class PageFeedbackComponent implements OnInit {
  @Input() lastUpdated?: Date;
  yesCount: number = 0;
  noCount: number = 0;
  showThanks: boolean = false;
  feedbackMessage: string = " ";
  isParty: boolean = false;

  ngOnInit() {
    this.loadCounts();
  }

  loadCounts() {
    const counts = JSON.parse(localStorage.getItem('feedbackCounts') || '{}');
    this.yesCount = counts.yes || 0;
    this.noCount = counts.no || 0;
  }

  saveCounts() {
    const counts = {
      yes: this.yesCount,
      no: this.noCount
    };
    localStorage.setItem('feedbackCounts', JSON.stringify(counts));
  }

  onYesClick() {
    this.yesCount++;
    this.saveCounts();
    this.feedbackMessage = "Glad you found this helpful !!";
    this.showThanks = true;
    this.isParty = true;
    setTimeout(() => {
      this.isParty = false;
      setTimeout(() => {
        this.showThanks = false;
      }, 300);
    }, 3000);
  }

  onNoClick() {
    this.noCount++;
    this.saveCounts();
    this.feedbackMessage = "Thanks for the feedback !!";
    this.showThanks = true;
    setTimeout(() => {
      this.showThanks = false;
    }, 4000);
  }
}
