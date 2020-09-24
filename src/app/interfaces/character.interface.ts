
export interface CharacterResponse {
  results:       Character[];

}

export interface Character {
    id: number;
    nombre: string;
    imagen: string;
    especie: string;
    género: string;
    origen: string;
    estado: string;
  }

