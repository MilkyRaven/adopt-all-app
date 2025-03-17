import { Application } from "../entities/Application";
export interface ApplicationRepository {
  findAllApplicationsByUser(userId: string): Promise<Application[]>;
  createApplication(application: Application): Promise<string>;
  updateApplication(application: Application): Promise<void>;
  deleteApplication(id: string): Promise<void>;
}
