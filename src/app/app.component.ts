import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'time-form';

  number1: number = 0;
  number2: number = 0;
  selectedTime: string = '';
  allDay: boolean = false;
  hour: number = 0;
  minute: number = 0;

  constructor() { }
  ngOnInit(): void {

  }
}
