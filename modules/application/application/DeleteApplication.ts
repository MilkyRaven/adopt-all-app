import { ApplicationRepository } from "../domain/repositories/ApplicationRepository";

export class DeleteApplication {
  constructor(private repository: ApplicationRepository) {}
  async execute(applicationId: string): Promise<void> {
    try {
      return this.repository.deleteApplication(applicationId);
    } catch (error) {
      throw error;
    }
  }
}
