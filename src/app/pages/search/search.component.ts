import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';

import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public texto: string = '';
  public characters: Character[] = [];

  constructor(  private activatedRoute: ActivatedRoute,
                private characterService: CharacterService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      
      this.texto = params.texto;

      this.characterService.searchCharacter( params.texto ).subscribe( characters => {
        this.characters = characters;
      });
    })

  }

}
