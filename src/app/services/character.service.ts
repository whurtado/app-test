import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { CharacterResponse, Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characterPage = 1;
  public cargando: boolean = false;

  constructor( private http: HttpClient) { }

  getCharater():Observable<Character[]>{

    return this.http.get<CharacterResponse>(environment.baseUrlAPI).pipe(
      map( resp => resp?.results )
    );
  }

  searchCharacter( texto: string, page = 200 ):Observable<Character[]> {
    
    const url = `${ environment.baseUrlAPI }/?name=${ texto }`;
    
    return this.http.get<CharacterResponse>(url).pipe(
      map( resp => resp?.results )
    )

  }

}
