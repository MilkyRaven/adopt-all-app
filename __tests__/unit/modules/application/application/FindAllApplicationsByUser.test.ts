import { FindAllApplicationsByUser } from "../../../../../modules/application/application/FindAllApplicationsByUser";
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
    const newApplication = { ...application, id: "XQwhuEgBlnLUhxqjeXhw" };
    this.applications.push(newApplication);
    return "XQwhuEgBlnLUhxqjeXhw";
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

describe("find all adoption applications given an user ID", () => {
  let repository: ApplicationRepository;
  let findAllApplicationsByUser: FindAllApplicationsByUser;
  let testApplications: Application[];

  beforeEach(() => {
    testApplications = [
      {
        id: "id-1",
        animalId: "animal-1",
        userId: "user-1",
        fullName: "Milky Kiwi",
        email: "milkykiwidev@gmail.com",
        comments: "I would love to adopt this animal",
        createdAt: "2025-03-18T12:00:00Z",
      },
      {
        id: "id-2",
        animalId: "animal-2",
        userId: "user-2",
        fullName: "John Doe",
        email: "john@example.com",
        comments: "Another application",
        createdAt: "2025-03-19T12:00:00Z",
      },
      {
        id: "id-3",
        animalId: "animal-3",
        userId: "user-3",
        fullName: "María Pazos",
        email: "maria@example.com",
        comments: "I'm interested in adopting",
        createdAt: "2025-03-20T12:00:00Z",
      },
    ];
    repository = new MockApplicationRepository(testApplications);
    findAllApplicationsByUser = new FindAllApplicationsByUser(repository);
  });

  test("should return all adoption applications for a specific user", async () => {
    const userApplications = await findAllApplicationsByUser.execute("user-1");

    expect(userApplications.length).toBe(1);
    expect(userApplications[0].id).toBe("id-1");
  });

  test("should return empty array for user with no applications", async () => {
    const userApplications = await findAllApplicationsByUser.execute(
      "non-existent"
    );

    expect(userApplications).toEqual([]);
    expect(userApplications.length).toBe(0);
  });

  test("should not return applications from other users", async () => {
    const userApplications = await findAllApplicationsByUser.execute("user-2");
    expect(userApplications.length).toBe(1);
    expect(userApplications[0].id).toBe("id-2");
    expect(userApplications.every((app) => app.userId === "user-2")).toBe(true);
  });
});
