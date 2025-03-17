import { ApplicationRepository } from "../domain/repositories/ApplicationRepository";

export class DeleteApplication {
  constructor(private repository: ApplicationRepository) {}
  async execute(applicationId: string): Promise<void> {
    return this.repository.deleteApplication(applicationId);
  }
}
