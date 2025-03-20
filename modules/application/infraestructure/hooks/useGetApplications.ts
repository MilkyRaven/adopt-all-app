import { useEffect, useState } from "react";
import { Application } from "../../domain/entities/Application";
import { repository } from "../repositories";
import { useUser } from "@/modules/user/infraestructure/UserContext";

export default function useGetApplications() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const { user } = useUser();

  async function fetchApplications() {
    setLoading(true);
    try {
      const response = await repository.application.findAllApplicationsByUser(
        user.id
      );
      setApplications(response);
    } catch (error) {
      setError("Error fetching applications. Try again later");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchApplications();
  }, []);

  return { applications, loading, error, refetch: fetchApplications };
}
