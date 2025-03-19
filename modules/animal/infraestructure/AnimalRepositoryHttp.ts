import { Http } from "@/modules/shared/api/domain/Http";
import { Animal } from "../domain/entities/Animal";
import { AnimalRepository } from "../domain/repositories/AnimalRepository";

export class AnimalRepositoryHttp implements AnimalRepository {
  constructor(private httpClient: Http) {}

  async findAnimals(query?: string): Promise<Animal[]> {
    try {
      const url = query
        ? `https://adopt-all-backend-production.up.railway.app/animals?${query}`
        : "https://adopt-all-backend-production.up.railway.app/animals";

      const response = await this.httpClient.get(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
