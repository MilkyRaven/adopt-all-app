import axios from "axios";
import { Application } from "../../modules/application/domain/entities/Application";
import { ApplicationRepositoryHttp } from "../../modules/application/infraestructure/repositories/ApplicationRepositoryHttp";
import { AxiosRepository } from "../../modules/shared/api/infraestructure/AxiosRepository";
import { CreateApplication } from "../../modules/application/application/CreateApplication";
import { FindAllApplicationsByUser } from "../../modules/application/application/FindAllApplicationsByUser";
import { UpdateApplication } from "../../modules/application/application/UpdateApplication";
import { DeleteApplication } from "../../modules/application/application/DeleteApplication";

const errorLog = (message: string, error: any) => {
  console.error(message, {
    name: error?.name,
    message: error?.message,
    code: error?.code,
    status: error?.response?.status,
  });
};

describe("Adoption Application CRUD Integration", () => {
  const axiosClient = new AxiosRepository();
  const repository = new ApplicationRepositoryHttp(axiosClient);

  const createApplication = new CreateApplication(repository);
  const findAllApplicationsByUser = new FindAllApplicationsByUser(repository);
  const updateApplication = new UpdateApplication(repository);
  const deleteApplication = new DeleteApplication(repository);

  const userId = "integration-test-user";
  let apiAvailable = false;

  const cleanupTestData = async () => {
    if (!apiAvailable) return;

    try {
      const userApplications = await findAllApplicationsByUser.execute(userId);

      for (const app of userApplications) {
        try {
          await deleteApplication.execute(app.id);
        } catch (error) {
          console.warn(`Failed to delete application ${app.id}`);
        }
      }
    } catch (error) {
      console.warn("Failed to fetch applications for cleanup");
    }
  };

  beforeAll(async () => {
    try {
      await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/health`, {
        timeout: 2000,
      });
      apiAvailable = true;
    } catch (error) {
      apiAvailable = false;
      errorLog("API is not available", error);
    }
  });

  afterAll(async () => {
    await cleanupTestData();
  });
  afterEach(async () => {
    await cleanupTestData();
  });

  const skipIfNoApi = () => {
    if (!apiAvailable) {
      console.warn("Skipping test because API is not available");
      return true;
    }
    return false;
  };

  test("Create an application", async () => {
    if (skipIfNoApi()) return;

    const newApplication: Application = {
      id: "",
      animalId: "test-animal",
      userId,
      fullName: "Test Animal",
      email: "test@example.com",
      comments: "Testing integration",
      createdAt: new Date().toISOString(),
    };

    const applicationId = await createApplication.execute(newApplication);
    expect(applicationId).toBeTruthy();

    const userApplications = await findAllApplicationsByUser.execute(userId);
    expect(userApplications.length).toBeGreaterThan(0);

    const createdApp = userApplications.find((app) => app.id === applicationId);
    expect(createdApp).toBeDefined();
    expect(createdApp?.email).toBe("test@example.com");
  });

  test("Update an adoption application", async () => {
    if (skipIfNoApi()) return;

    const newApplication: Application = {
      id: "",
      animalId: "test-animal",
      userId,
      fullName: "Update Test",
      email: "test@example.com",
      comments: "Testing update functionality",
      createdAt: new Date().toISOString(),
    };

    const applicationId = await createApplication.execute(newApplication);
    expect(applicationId).toBeTruthy();

    const updateData = {
      fullName: "Updated Name",
      comments: "Updated comments",
    };
    await updateApplication.execute(applicationId, updateData);

    const userApplications = await findAllApplicationsByUser.execute(userId);
    const updatedApp = userApplications.find(
      (app) => app.email === newApplication.email
    );

    expect(updatedApp).toBeDefined();
    expect(updatedApp?.fullName).toBe("Updated Name");
    expect(updatedApp?.comments).toBe("Updated comments");
    expect(updatedApp?.email).toBe("test@example.com");
  });

  test("Delete an application", async () => {
    if (skipIfNoApi()) return;

    const newApplication: Application = {
      id: "",
      animalId: "test-animal",
      userId,
      fullName: "Delete Test",
      email: "test@example.com",
      comments: "Testing delete functionality",
      createdAt: new Date().toISOString(),
    };

    const applicationId = await createApplication.execute(newApplication);
    expect(applicationId).toBeTruthy();

    let userApplications = await findAllApplicationsByUser.execute(userId);
    const createdApp = userApplications.find((app) => app.id === applicationId);
    expect(createdApp).toBeDefined();

    await deleteApplication.execute(applicationId);

    userApplications = await findAllApplicationsByUser.execute(userId);
    const deletedApp = userApplications.find((app) => app.id === applicationId);
    expect(deletedApp).toBeUndefined();
  });
});
