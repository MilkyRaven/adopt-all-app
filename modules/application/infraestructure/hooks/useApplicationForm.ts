import { useState } from "react";
import { Application } from "../../domain/entities/Application";
import { repository } from "../repositories";
import { router } from "expo-router";

type ApplicationForm = Omit<
  Application,
  "animalId" | "userId" | "id" | "createdAt"
>;

export default function useApplicationForm({
  fullName,
  email,
  comments,
}: Partial<ApplicationForm> = {}) {
  const [formData, setFormData] = useState<ApplicationForm>({
    fullName: fullName ?? "",
    email: email ?? "",
    comments: comments ?? "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      setError("Failed to create application. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleUpdate = async (applicationId: string) => {
    setLoading(true);
    try {
      await repository.application.updateApplication(applicationId, formData);
      router.replace("/applications");
    } catch (error) {
      console.error("Failed to update application:", error);
      setError("Failed to update application. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleOnChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return {
    loading,
    formData,
    handleSubmit,
    handleUpdate,
    handleOnChange,
    error,
  };
}
