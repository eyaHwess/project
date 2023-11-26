import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {
  formattedTime: string='';
constructor(private datePipe: DatePipe){}
  ngOnInit() {
    // Set the initial time
    this.updateTime();

    // Update the time every second
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    // Make a GET request to the WorldTimeAPI
    axios.get('http://worldtimeapi.org/api/ip')
      .then(response => {
        // Extract the current time from the response
        const fullTimestamp: string = response.data.utc_datetime;

        // Set the time zone to 'Africa/Tunis'
        const dateObject = new Date(fullTimestamp);
        const options = { timeZone: 'Africa/Tunis', hour12: false };
        this.formattedTime = dateObject.toLocaleTimeString('en-US', options);
      })
      .catch(error => {
        console.error('Error fetching time:', error);
      });
  }

}
