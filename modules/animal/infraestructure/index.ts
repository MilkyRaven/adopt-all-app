import { AxiosRepository } from "@/modules/shared/api/infraestructure/AxiosRepository";
import { AnimalRepositoryHttp } from "./AnimalRepositoryHttp";

class BuildRepository {
  private httpClient = new AxiosRepository();

  build() {
    return {
      application: new AnimalRepositoryHttp(this.httpClient),
    };
  }
}

export const repository = new BuildRepository().build();
