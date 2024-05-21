import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-journey-rating',
  templateUrl: './journey-rating.component.html',
  styleUrls: ['./journey-rating.component.css']
})
export class JourneyRatingComponent {
  @Input("rating") rating!: number;
  @Output() ratingUpdated = new EventEmitter();

  totalStar: number = 5;
  ratingArray: number[] = [];

  ngOnInit() {
    for (let index = 0; index < this.totalStar; index++) {
      this.ratingArray.push(index);
    }
  }

  calculateRating(rating: number) {
    this.ratingUpdated.emit(rating);
  }

  iconStatus(index: number) {
    if (this.rating >= index + 1) {
      return 'star';
    } else {
      return 'star_border';
    }
  }
}
