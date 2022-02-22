import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private BASE_URL = "https://rickandmortyapi.com/api/";

  constructor(
    private http : HttpClient
  ) { }

  characters (page : number = 1, name : string = "") {
    return this.http.get<any>(this.BASE_URL + `character?page=${page}&name=${name}` , {})
  }
}