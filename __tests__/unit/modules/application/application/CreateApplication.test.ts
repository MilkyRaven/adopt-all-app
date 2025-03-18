import { CreateApplication } from "../../../../../modules/application/application/CreateApplication";
import { Application } from "../../../../../modules/application/domain/entities/Application";
import { ApplicationRepository } from "../../../../../modules/application/domain/repositories/ApplicationRepository";

class MockApplicationRepository implements ApplicationRepository {
  private applications: Application[] = [];
  private mockId = "CRAwQ771FRnGTcEjuaAV";

  async findAllApplicationsByUser(userId: string): Promise<Application[]> {
    return this.applications.filter((app) => app.userId === userId);
  }

  async createApplication(application: Application): Promise<string> {
    const newApplication = { ...application, id: this.mockId };
    this.applications.push(newApplication);
    return this.mockId;
  }

  async updateApplication(
    applicationId: string,
    applicationData: Partial<Application>
  ): Promise<void> {
    const index = this.applications.findIndex(
      (app) => app.id === applicationId
    );
    if (index !== -1) {
      this.applications[index] = {
        ...this.applications[index],
        ...applicationData,
      };
    }
  }

  async deleteApplication(id: string): Promise<void> {
    const index = this.applications.findIndex((app) => app.id === id);
    if (index !== -1) {
      this.applications.splice(index, 1);
    }
  }
}

describe("create an adoption application", () => {
  let repository: ApplicationRepository;
  let createApplication: CreateApplication;

  beforeEach(() => {
    repository = new MockApplicationRepository();
    createApplication = new CreateApplication(repository);
  });

  test("should create a new adoption application and return its id", async () => {
    const applicationData: Application = {
      id: "",
      animalId: "46Jf7eAuMvL8rEhlCAMT",
      userId: "5X1x1RbgnCLAoXxBvBOf",
      fullName: "Milky Kiwi",
      email: "milkykiwidev@gmail.com",
      comments: "I would love to adopt this animal!",
      createdAt: "2025-03-18T12:00:00Z",
    };

    const applicationId = await createApplication.execute(applicationData);

    expect(applicationId).toBe("CRAwQ771FRnGTcEjuaAV");
  });

  test("should store the adoption application", async () => {
    const applicationData: Application = {
      id: "",
      animalId: "46Jf7eAuMvL8rEhlCAMT",
      userId: "5X1x1RbgnCLAoXxBvBOf",
      fullName: "Milky Kiwi",
      email: "milkykiwidev@gmail.com",
      comments: "I would love to adopt this animal!",
      createdAt: "2025-03-18T12:00:00Z",
    };

    await createApplication.execute(applicationData);
    const userApplications = await repository.findAllApplicationsByUser(
      "5X1x1RbgnCLAoXxBvBOf"
    );

    expect(userApplications.length).toBe(1);
    expect(userApplications[0].fullName).toBe("Milky Kiwi");
    expect(userApplications[0].email).toBe("milkykiwidev@gmail.com");
  });
});
