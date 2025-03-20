import { UpdateApplication } from "../../../../../modules/application/application/UpdateApplication";
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
    const newApplication = { ...application, id: "oyli7bCvjlUrnQiqSK8e" };
    this.applications.push(newApplication);
    return "oyli7bCvjlUrnQiqSK8e";
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

  getApplicationById(id: string): Application | undefined {
    return this.applications.find((app) => app.id === id);
  }
}

describe("Update an adoption application", () => {
  let repository: MockApplicationRepository;
  let updateApplication: UpdateApplication;
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
    updateApplication = new UpdateApplication(repository);
  });

  test("should update an application's full name field", async () => {
    const updateData = {
      fullName: "John Smith",
    };
    await updateApplication.execute("lyli7bCvjlUrnQiqSK8e", updateData);
    const updatedApplication = repository.getApplicationById(
      "lyli7bCvjlUrnQiqSK8e"
    );
    expect(updatedApplication).toBeDefined();
    expect(updatedApplication?.fullName).toBe("John Smith");
    expect(updatedApplication?.email).toBe("milkykiwidev@gmail.com");
    expect(updatedApplication?.comments).toBe(
      "I would love to adopt this animal"
    );
  });

  test("should update an adapplication's email field", async () => {
    const updateData = {
      email: "john.updated@example.com",
    };
    await updateApplication.execute("lyli7bCvjlUrnQiqSK8e", updateData);

    const updatedApplication = repository.getApplicationById(
      "lyli7bCvjlUrnQiqSK8e"
    );
    expect(updatedApplication).toBeDefined();
    expect(updatedApplication?.email).toBe("john.updated@example.com");
    expect(updatedApplication?.fullName).toBe("Milky Kiwi");
  });

  test("should update multiple fields at once", async () => {
    // Arrange
    const updateData = {
      fullName: "John Smith",
      email: "john.smith@example.com",
      comments: "Just another comment, nothing interesting here",
    };

    // Act
    await updateApplication.execute("lyli7bCvjlUrnQiqSK8e", updateData);

    // Assert
    const updatedApplication = repository.getApplicationById(
      "lyli7bCvjlUrnQiqSK8e"
    );
    expect(updatedApplication).toBeDefined();
    expect(updatedApplication?.fullName).toBe("John Smith");
    expect(updatedApplication?.email).toBe("john.smith@example.com");
    expect(updatedApplication?.comments).toBe(
      "Just another comment, nothing interesting here"
    );
    expect(updatedApplication?.userId).toBe("nyli7bCvjlUrnQiqSK8e");
  });

  test("should not throw an error when updating non-existent application", async () => {
    const updateData = {
      fullName: "New Name",
    };
    await expect(
      updateApplication.execute("non-existent", updateData)
    ).resolves.not.toThrow();
  });
});
