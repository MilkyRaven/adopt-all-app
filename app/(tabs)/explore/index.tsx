import { View } from "react-native";
import LocationTracker from '@/components/location/LocationTracker';
import AnimalList from "@/components/animals/AnimalList";
import WelcomeBanner from "@/components/WelcomeBanner";

export default function Explore() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
      }}
    >
      <WelcomeBanner />
      <LocationTracker />
      <AnimalList />
    </View>
  );
}
