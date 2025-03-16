import { View } from "react-native";
import LocationTracker from '@/components/location/LocationTracker';
import AnimalList from "@/components/animals/AnimalList";
import WelcomeBanner from "@/components/WelcomeBanner";
import AnimalFilter from "@/components/animals/AnimalFilter";
import { Link } from "expo-router";

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
      <Link href={"/explore/modal"}>
        <AnimalFilter />
      </Link>
      <AnimalList />
    </View>
  );
}
