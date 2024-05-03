import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchPokeDetailsService } from '../services/fetch.poke.details.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
})
export class PokemonDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private fetchPokeDetails: FetchPokeDetailsService
  ) {}

  pokeDetails: any;

  ngOnInit() {
    const pokeId = this.route.snapshot.paramMap.get('id');
      this.pokeDetails = this.getPokeDetails(pokeId);
  }

  getPokeDetails(pokeId: any): any {
    this.fetchPokeDetails.getData(pokeId).subscribe((data) => {
        console.log(data)
        return data;
    });
  }
}
