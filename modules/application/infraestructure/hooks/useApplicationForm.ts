import { useState } from "react";
import { Application } from "../../domain/entities/Application";
import { repository } from "../repositories";
import { router } from "expo-router";

type ApplicationForm = Omit<
  Application,
  "animalId" | "userId" | "id" | "createdAt"
>;

export default function useApplicationForm() {
  const [formData, setFormData] = useState<ApplicationForm>({
    fullName: "",
    email: "",
    comments: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (animalId: string) => {
    const application: Application = {
      ...formData,
      animalId: animalId as string,
      userId: "5X1x1RbgnCLAoXxBvBOf",
      id: "",
      createdAt: new Date().toISOString(),
    };
    setLoading(true);
    try {
      await repository.application.createApplication(application);
      router.replace("/applications");
    } catch (error) {
      console.error("Failed to create application:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleOnChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return { loading, formData, handleSubmit, handleOnChange };
}
