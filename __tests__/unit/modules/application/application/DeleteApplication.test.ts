import { DeleteApplication } from "../../../../../modules/application/application/DeleteApplication";
import { Application } from "../../../../../modules/application/domain/entities/Application";
import { ApplicationRepository } from "../../../../../modules/application/domain/repositories/ApplicationRepository";

class MockApplicationRepository implements ApplicationRepository {
  private applications: Application[] = [];

  constructor(initialApplications: Application[] = []) {
    this.applications = [...initialApplications];
  }

  async findAllApplicationsByUser(userId: string): Promise<Application[]> {
    return this.applications.filter((app) => app.userId === userId);
  }

  async createApplication(application: Application): Promise<string> {
    const newApplication = { ...application, id: "lyli7bCvjlUrnQiqSK8e" };
    this.applications.push(newApplication);
    return "lyli7bCvjlUrnQiqSK8e";
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

  getApplications(): Application[] {
    return [...this.applications];
  }
}

describe("delete an adoption application", () => {
  let repository: MockApplicationRepository;
  let deleteApplication: DeleteApplication;
  let testApplication: Application;

  beforeEach(() => {
    testApplication = {
      id: "lyli7bCvjlUrnQiqSK8e",
      animalId: "myli7bCvjlUrnQiqSK8e",
      userId: "nyli7bCvjlUrnQiqSK8e",
      fullName: "Milky Kiwi",
      email: "milkykiwidev@gmail.com",
      comments: "I would love to adopt this animal",
      createdAt: "2025-03-18T12:00:00Z",
    };
    repository = new MockApplicationRepository([testApplication]);
    deleteApplication = new DeleteApplication(repository);
  });

  test("should delete an application by its id", async () => {
    expect(repository.getApplications().length).toBe(1);
    await deleteApplication.execute("lyli7bCvjlUrnQiqSK8e");
    expect(repository.getApplications().length).toBe(0);
  });

  test("should not throw an error when deleting an adoption application that doesn't exist", async () => {
    await expect(
      deleteApplication.execute("non-existent")
    ).resolves.not.toThrow();
    expect(repository.getApplications().length).toBe(1);
  });

  test("should only delete the specified adoption application", async () => {
    const secondApplication: Application = {
      id: "alyli7bCvjlUrnQiqSK8",
      animalId: "blyli7bCvjlUrnQiqSK8",
      userId: "clyli7bCvjlUrnQiqSK8",
      fullName: "María Pazos",
      email: "maria@pazos.com",
      comments: "I'm interested in adopting",
      createdAt: "2025-03-19T12:00:00Z",
    };
    await repository.createApplication(secondApplication);
    expect(repository.getApplications().length).toBe(2);
    await deleteApplication.execute("lyli7bCvjlUrnQiqSK8e");
    const remainingApplications = repository.getApplications();
    expect(remainingApplications.length).toBe(1);
    expect(remainingApplications[0].fullName).toBe("María Pazos");
  });
});
