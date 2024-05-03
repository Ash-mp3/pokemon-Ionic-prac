import { Injectable, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchPokeListService {
    constructor(private http: HttpClient) { }

    url = 'https://pokeapi.co/api/v2/pokemon?limit=151';

    getData(): Observable<any> {
        return this.http.get<any>(this.url)
    }
    

}
