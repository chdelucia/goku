import { Character } from "./character.model";

export interface DetailedCharacter extends Character {
    originPlanet: {
      id: number;
      name: string;
      isDestroyed: boolean;
      description: string;
      image: string;
      deletedAt: string | null;
    };
    transformations: Array<{
      id: number;
      name: string;
      image: string;
      ki: string;
      deletedAt: string | null;
    }>;
  }