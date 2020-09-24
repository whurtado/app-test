import { Component, OnInit } from '@angular/core';

import { CharacterService } from '../../services/character.service';
import { CharacterResponse, Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public characters: Character[] = [];

  constructor( private characterService: CharacterService ) { }

  ngOnInit(): void {

    this.characterService.getCharater()
      .subscribe( characters => {
        this.characters = characters;
        console.log("kkk",this.characters);
      });
  }

}
