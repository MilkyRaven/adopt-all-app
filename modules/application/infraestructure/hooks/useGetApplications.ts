import { useEffect, useState } from "react";
import { Application } from "../../domain/entities/Application";
import { repository } from "../repositories";

export default function getApplications() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function fetchApplications() {
    setLoading(true);
    try {
      const response = await repository.application.findAllApplicationsByUser(
        "5X1x1RbgnCLAoXxBvBOf" //TO-DO: delete hardcoded id
      );
      //setApplications(response);
    } catch (error) {
      setError("Error fetching applications. Try again later");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchApplications();
  }, []);
  return { applications, loading, error };
}
