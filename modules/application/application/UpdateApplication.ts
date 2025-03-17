import { Application } from "../domain/entities/Application";
import { ApplicationRepository } from "../domain/repositories/ApplicationRepository";

export class UpdateApplication {
  constructor(private repository: ApplicationRepository) {}
  async execute(
    applicationId: string,
    applicationData: Partial<Application>
  ): Promise<void> {
    return this.repository.updateApplication(applicationId, applicationData);
  }
}
