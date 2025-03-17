import { AxiosRepository } from "@/modules/shared/api/infraestructure/AxiosRepository";
import { ApplicationRepositoryHttp } from "./ApplicationRepositoryHttp";

class BuildRepository {
  private httpClient = new AxiosRepository();

  build() {
    return {
      application: new ApplicationRepositoryHttp(this.httpClient),
    };
  }
}

export const repository = new BuildRepository().build();
