import { useEffect, useState } from "react";
import { Application } from "../../domain/entities/Application";
import { repository } from "../repositories";

export default function getApplications() {
  const [applications, setApplications] = useState<Application[]>([]);

  async function fetchApplications() {
    const response = await repository.application.findAllApplicationsByUser(
      "5X1x1RbgnCLAoXxBvBOf"
    );
    setApplications(response);
  }

  useEffect(() => {
    fetchApplications();
  }, []);
  return applications;
}
