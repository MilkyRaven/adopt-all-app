import { View, StyleSheet } from "react-native";
import { useLocation } from "@/modules/location/hooks/useLocation";
import { borderRadius, colors, spacing } from "@/modules/shared/themes/styles";
import Text from "@/modules/shared/custom/Text";
import Error from "@/modules/shared/custom/Error";
import Loading from "@/modules/shared/custom/Loading";
//TO-DO: should i really be doing this here? i don't think so:
//may be breaking separation of concerns -> rendering UI and instantiating a service
//to test this component I will depend on ExpoLocationService
//to switch providers, I will need to edit this component

export default function LocationTracker() {
  const { location, error, loading } = useLocation();
  if (error) {
    return <Error message={error} />
  }
  if (loading) {
    return <Loading />
  }
  return (
    <View style={styles.container}>
      {location && (
        <View style={styles.locationContainer}>
          <View style={styles.locationRow}>
            <Text type="h3">Your location</Text>
            <Text type="support">Lat {location.lat}</Text>
            <Text type="support">Lon {location.lon}</Text>
          </View>
          <Text type="support">Last Update {new Date(location.timestamp).toLocaleString()}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    backgroundColor: colors.background,
    borderRadius: borderRadius.md,
  },
  locationContainer: {
    display: "flex",
    flexDirection: "column"
  },
  locationRow: {
    flexDirection: "row",
    gap: spacing.sm,
    alignItems: "baseline"
  }
});
