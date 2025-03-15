import { Text, View, StyleSheet } from "react-native";
import { useLocation } from "@/modules/location/hooks/useLocation";

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
        <>
          <Text>Latitude: {location.lat}</Text>
          <Text>Longitude: {location.lon}</Text>
          <Text>Last Update: {new Date(location.timestamp).toLocaleString()}</Text>
        </>
      )}
    </View>
  );
}
//TO-DO: añado un estilo super básisco para tener claras las boundaries del componente
const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#000",
  },
});