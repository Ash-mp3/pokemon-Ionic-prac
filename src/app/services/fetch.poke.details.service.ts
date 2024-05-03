import { Injectable, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchPokeDetailsService {
    constructor(private http: HttpClient) { }

    getData(pokeId: string): Observable<any> {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;
        return this.http.get<any>(url)
    }
    

}
