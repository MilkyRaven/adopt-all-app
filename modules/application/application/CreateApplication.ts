import { Application } from "../domain/entities/Application";
import { ApplicationRepository } from "../domain/repositories/ApplicationRepository";

export class CreateApplication {
  constructor(private repository: ApplicationRepository) {}
  async execute(application: Application): Promise<string> {
    return this.repository.createApplication(application);
  }
}
