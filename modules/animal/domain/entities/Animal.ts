import { Location } from "@/modules/location/domain/Location";

export interface Animal {
  id: string;
  name: string;
  species: string;
  neutered: boolean;
  age: string;
  image: string;
  description: string;
  entryDate: string;
  location: Location;
  distance?: number;
}
