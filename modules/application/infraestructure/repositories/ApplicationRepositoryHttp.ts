import { ApplicationRepository } from "../../domain/repositories/ApplicationRepository";
import { Application } from "../../domain/entities/Application";
import { Http } from "@/modules/shared/api/domain/Http";

export class ApplicationRepositoryHttp implements ApplicationRepository {
  constructor(private httpClient: Http) {}

  async findAllApplicationsByUser(userId: string): Promise<Application[]> {
    const response = await this.httpClient.get(
      `${process.env.EXPO_PUBLIC_API_URL}/applications/${userId}`
    );
    return response;
  }
  async createApplication(application: Application): Promise<string> {
    const response = await this.httpClient.post(
      `${process.env.EXPO_PUBLIC_API_URL}/applications`,
      application
    );
    return response;
  }
  async updateApplication(
    id: string,
    data: Partial<Application>
  ): Promise<void> {
    await this.httpClient.put(
      `${process.env.EXPO_PUBLIC_API_URL}/applications/${id}`,
      data
    );
  }
  async deleteApplication(id: string): Promise<void> {
    await this.httpClient.delete(
      `${process.env.EXPO_PUBLIC_API_URL}/applications/${id}`
    );
  }
}
