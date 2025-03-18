import { View, StyleSheet } from "react-native";
import { useLocation } from "@/modules/location/hooks/useLocation";
import { borderRadius, colors, spacing } from "@/modules/shared/themes/styles";
import Text from "../shared/Text";
//TO-DO: should i really be doing this here? i don't think so:
//may be breaking separation of concerns -> rendering UI and instantiating a service
//to test this component I will depend on ExpoLocationService
//to switch providers, I will need to edit this component

export default function LocationTracker() {
  const { location, error, loading } = useLocation();
  return (
    //TO-DO: deberé definir con mayor claridad los estilos para los distintos estados del componente
    <View style={styles.container}>
      {error && <Text>{error}</Text>}
      {loading && <Text>Loading location...</Text>}
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
//TO-DO: añado un estilo super básisco para tener claras las boundaries del componente
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
