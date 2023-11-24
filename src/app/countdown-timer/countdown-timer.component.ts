import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  countdown: number = 30;
  private countdownSubscription: Subscription | undefined;
  segments: number[] = Array.from({ length: 30 }, (_, i) => i);

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    this.stopCountdown();
  }

  startCountdown() {
    this.countdownSubscription = interval(1000).subscribe(() => {
      if (this.countdown > 0) {
        this.countdown--;
      } else {
        this.stopCountdown();
      }
    });
  }

  stopCountdown() {
    if (this.countdownSubscription) {
      this.countdownSubscription.unsubscribe();
    }
  }
  getStyle() {
    let color: string;
    if (this.countdown <= 10) {
      color = 'red';
    } else if (this.countdown <= 20) {
      color = 'yellow';
    } else {
      color = 'green';
    }

    return {
      'font-size': '42px',
      'font-weight': 'bold',
      'color': color
    };
  }
  getSegmentStyle(index: number) {
    if (index >= this.countdown) {
      return {
        'background-color': 'transparent'
      };
    } else {
      return this.getStyle(); // Utilisez la même couleur que le compteur
    }
  }
}
