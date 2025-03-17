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
}
