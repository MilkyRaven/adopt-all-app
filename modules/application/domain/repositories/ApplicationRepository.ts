import { Application } from "../entities/Application";
export interface ApplicationRepository {
  findAllApplicationsByUser(userId: string): Promise<Application[]>;
  createApplication(application: Application): Promise<string>;
  updateApplication(
    applicationId: string,
    applicationData: Partial<Application>
  ): Promise<void>;
  deleteApplication(id: string): Promise<void>;
}
