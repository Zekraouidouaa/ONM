import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule


@Component({
  selector: 'app-message',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message.component.html',
  styleUrl: './message.component.scss'
})
export class MessageComponent {
  comment: string = 'METAR DAOR 281700Z 31012KT 9999 SCT025 30/12 Q1010';
  content: string = '';
  station: string = '';
  jour: string = '';
  heur: string = '';
  vent: string = '';
  direction: string = '';
  force: string = '';
  visibilite: string = '';
  temperature: string = '';
  point: string = '';
  pression: string = '';

  showContent() {
    const regex = /METAR\s(\w{4})\s(\d{2})(\d{2})(\d{2})Z\s(\d{3})(\d{2})KT\s(\d{4})\s(\w{3}\d{3})\s(\d{2})\/(\d{2})\sQ(\d{4})/;
    const matches = this.comment.match(regex);

    if (matches) {
      this.station = matches[1];        // Station
      this.jour = matches[2];           // Day
      this.heur = matches[3] + ":" + matches[4];  // Hour and Minute
      this.direction = matches[5];      // Wind direction
      this.force = matches[6];          // Wind force
      this.visibilite = matches[7];     // Visibility
      this.vent = `${matches[5]}° at ${matches[6]} KT`; // Full wind info
      this.temperature = matches[9];    // Temperature
      this.point = matches[10];         // Dew point
      this.pression = matches[11];      // Pressure
    }

    this.content = this.comment;
  }

}
