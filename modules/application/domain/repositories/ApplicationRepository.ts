import { Application } from "../entities/Application";
export interface ApplicationRepository {
  findAllApplicationsByUser(userId: string): Promise<Application[]>;
}
