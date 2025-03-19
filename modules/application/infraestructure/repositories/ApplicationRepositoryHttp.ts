import { ApplicationRepository } from "../../domain/repositories/ApplicationRepository";
import { Application } from "../../domain/entities/Application";
import { Http } from "@/modules/shared/api/domain/Http";

export class ApplicationRepositoryHttp implements ApplicationRepository {
  constructor(private httpClient: Http) {}

  async findAllApplicationsByUser(userId: string): Promise<Application[]> {
    const response = await this.httpClient.get(
      `https://adopt-all-backend-production.up.railway.app/applications/${userId}`
    );
    return response;
  }
  async createApplication(application: Application): Promise<string> {
    const response = await this.httpClient.post(
      "https://adopt-all-backend-production.up.railway.app/applications",
      application
    );
    return response;
  }
  async updateApplication(
    id: string,
    data: Partial<Application>
  ): Promise<void> {
    await this.httpClient.put(
      `https://adopt-all-backend-production.up.railway.app/applications/${id}`,
      data
    );
  }
  async deleteApplication(id: string): Promise<void> {
    await this.httpClient.delete(
      `https://adopt-all-backend-production.up.railway.app/applications/${id}`
    );
  }
}
