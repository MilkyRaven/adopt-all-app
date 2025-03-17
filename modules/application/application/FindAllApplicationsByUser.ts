import { Application } from "../domain/entities/Application";
import { ApplicationRepository } from "../domain/repositories/ApplicationRepository";

export class FindAllApplicationsByUser {
  constructor(private repository: ApplicationRepository) {}
  async execute(userId: string): Promise<Application[]> {
    return this.repository.findAllApplicationsByUser(userId);
  }
}
