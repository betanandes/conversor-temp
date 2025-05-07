import { IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonInput, IonButton, IonText} from '@ionic/angular/standalone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonInput, IonButton, IonText],
})
export class HomePage {
  inputValue: number | null = null;
  result: number | null = null;
  convertToCelsius = false;

  toggleConversion() {
    this.convertToCelsius = !this.convertToCelsius;
    this.result = null;
    this.inputValue = null;
  }

  converter() {
    if (this.inputValue === null) return;

    if (this.convertToCelsius) {
      this.result = ((this.inputValue - 32) * 5) / 9;
    } else {
      this.result = (this.inputValue * 9) / 5 + 32;
    }
  }
}
