import { View, StyleSheet } from "react-native";
import { useLocation } from "@/modules/location/hooks/useLocation";
import { borderRadius, colors, spacing } from "@/modules/shared/themes/styles";
import Text from "@/modules/shared/custom/Text";
import Error from "@/modules/shared/custom/Error";
import Loading from "@/modules/shared/custom/Loading";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@react-navigation/native";
import { useUser } from "@/modules/user/infraestructure/UserContext";

export default function LocationTracker() {
  const theme = useTheme();
  const { location, error, loading } = useLocation();
  const { user } = useUser();
  if (error) {
    return (<View style={styles.stateContainer}>
      <Error message={error} />
    </View>)
  }
  if (loading) {
    return (<View style={styles.stateContainer}><Loading /></View>)
  }
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.card }]}>
      <View style={styles.greetingContainer}>
        <Text>Hello {user.name ? user.name : "there"}!</Text>
      </View>
      {location && (
        <View style={styles.locationContainer}>
          {location.place && (
            <View style={styles.placeContainer}>
              <Ionicons name="location" size={20} color={theme.colors.text} />
              <Text>
                {[
                  "Your location",
                  location.place.name,
                  location.place.city
                ].filter(Boolean).join(" - ")}
              </Text>
            </View>
          )}
          <Text type="support">(Lat {location.lat} | Lon {location.lon})</Text>
          <Text type="support">Last Update {new Date(location.timestamp).toLocaleString()}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    borderRadius: borderRadius.md,
  },
  greetingContainer: {
    alignItems: "center",
    marginBottom: spacing.xs,
  },
  locationContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: spacing.xs
  },
  placeContainer: {
    flexDirection: "row",
    gap: spacing.sm,
    alignItems: "center",
    marginTop: spacing.xs,
  },
  stateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
