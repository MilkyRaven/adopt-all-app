import { Text, View } from "react-native";
import LocationTracker from '@/components/location/LocationTracker';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome to Adopt All!</Text>
      <LocationTracker />
    </View>
  );
}
