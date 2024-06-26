import { Component } from '@angular/core';
import {
  IonApp,
  IonRouterOutlet,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonTitle, IonToolbar, IonHeader, IonApp, IonRouterOutlet],
})
export class AppComponent {
  title = 'ionicPrac';
  constructor() {}
}
