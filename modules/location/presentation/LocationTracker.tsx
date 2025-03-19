import { View, StyleSheet } from "react-native";
import { useLocation } from "@/modules/location/hooks/useLocation";
import { borderRadius, colors, spacing } from "@/modules/shared/themes/styles";
import Text from "@/modules/shared/custom/Text";
import Error from "@/modules/shared/custom/Error";
import Loading from "@/modules/shared/custom/Loading";

export default function LocationTracker() {
  const { location, error, loading } = useLocation();
  if (error) {
    return (<View style={styles.stateContainer}>
      <Error message={error} />
    </View>)
  }
  if (loading) {
    return (<View style={styles.stateContainer}><Loading /></View>)
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
  },
  stateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
