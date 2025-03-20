import { useState } from "react";
import { Application } from "../../domain/entities/Application";
import { repository } from "../repositories";
import { router } from "expo-router";
import { useUser } from "@/modules/user/infraestructure/UserContext";

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
  const { user } = useUser();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (animalId: string) => {
    if (!formData.fullName.trim() || !formData.email.trim()) {
      setError("Full Name and Email are required.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Invalid email format.");
      return;
    }
    const application: Application = {
      ...formData,
      animalId: animalId as string,
      userId: user.id,
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
