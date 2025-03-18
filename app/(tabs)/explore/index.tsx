import { View, StyleSheet } from "react-native";
import LocationTracker from '@/components/location/LocationTracker';
import AnimalList from "@/components/animals/AnimalList";
import WelcomeBanner from "@/components/WelcomeBanner";
import AnimalFilter from "@/components/animals/AnimalFilter";
import { Link } from "expo-router";
import Spacing from "@/components/shared/Spacing";
import { spacing } from "@/modules/shared/themes/styles";

export default function Explore() {
  return (
    <View style={styles.container}>
      <WelcomeBanner />
      <Spacing />
      <LocationTracker />
      <Spacing />
      <Link href={"/explore/modal"}>
        <AnimalFilter />
      </Link>
      <Spacing />
      <AnimalList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md
  }
});
