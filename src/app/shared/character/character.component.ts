import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  @Input() characters: any;

  constructor( private router: Router ) {}

  ngOnInit(): void {
     //console.log("personajes",this.characters);
  }

}
