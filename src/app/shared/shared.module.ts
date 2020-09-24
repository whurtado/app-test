import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CharacterComponent } from './character/character.component';



@NgModule({
  declarations: [NavbarComponent, CharacterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    CharacterComponent
  ]
})
export class SharedModule { }
