import { Component, OnInit } from '@angular/core';
import { FetchPokeListService } from '../services/fetch-poke-list.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonInfiniteScrollContent,
    IonInfiniteScroll,
    IonLabel,
    IonItem,
    IonList,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    CommonModule
  ],
})
export class HomePage implements OnInit {
  constructor(private fetchPokeListService: FetchPokeListService, private router: Router) {}
  title = 'Ionic Practice';
  list: any = [];

  ngOnInit(): void {
    this.fetchPokeListService.getData().subscribe((data) => {
      this.list = data.results;
      console.log(this.list);
      this.getPokeId(data.results);
    });

    this.list.map((item: any) => {
      console.log(item);
    });
  }

  getPokeId(pokeList: any[]) {
    pokeList.forEach((item: any) => {
      const pokeId = item.url.split('/');
      item.id = pokeId[6];
    });
  }
    
  pokeDetails(pokeId: any) {
    this.router.navigate(['./details', { id: pokeId }]);
  }
}
