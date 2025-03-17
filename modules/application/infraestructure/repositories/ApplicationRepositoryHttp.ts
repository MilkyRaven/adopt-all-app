import { ApplicationRepository } from "../../domain/repositories/ApplicationRepository";
import { Application } from "../../domain/entities/Application";
import { Http } from "@/modules/shared/api/domain/Http";

export class ApplicationRepositoryHttp implements ApplicationRepository {
  constructor(private httpClient: Http) {}

  async findAllApplicationsByUser(userId: string): Promise<Application[]> {
    const response = await this.httpClient.get(
      `http://localhost:4000/applications/${userId}`
    );
    return response;
  }
  async createApplication(application: Application): Promise<string> {
    const response = await this.httpClient.post(
      `http://localhost:4000/applications`,
      application
    );
    return response;
  }
  async updateApplication(
    id: string,
    data: Partial<Application>
  ): Promise<void> {
    await this.httpClient.put(`http://localhost:4000/applications/${id}`, data);
  }
  async deleteApplication(id: string): Promise<void> {
    await this.httpClient.delete(`http://localhost:4000/applications/${id}`);
  }
}
