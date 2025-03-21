import { useState } from "react";
import { Alert } from "react-native";
import { repository } from "../repositories";

interface UseDeleteApplicationReturn {
  loading: boolean;
  showDeleteConfirmation: (id: string, onSuccess?: () => void) => void;
}

export default function useDeleteApplication(): UseDeleteApplicationReturn {
  const [loading, setLoading] = useState(false);

  const deleteApplication = async (id: string): Promise<void> => {
    setLoading(true);
    try {
      await repository.application.deleteApplication(id);
    } catch (error) {
      Alert.alert(
        "Error",
        "Failed to delete the application. Please try again later.",
        [{ text: "OK" }]
      );
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const showDeleteConfirmation = (id: string, onSuccess?: () => void) => {
    Alert.alert(
      "Delete Modal",
      "Are you sure you want to delete this Adoption Application?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            try {
              await deleteApplication(id);
              if (onSuccess) {
                onSuccess();
              }
            } catch (error) {
              Alert.alert(
                "Error",
                "An error occurred while deleting the application.",
                [{ text: "OK" }]
              );
            }
          },
        },
      ]
    );
  };

  return {
    loading,
    showDeleteConfirmation,
  };
}
