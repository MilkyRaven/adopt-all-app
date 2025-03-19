import { View, StyleSheet } from "react-native";
import LocationTracker from "@/modules/location/presentation/LocationTracker";
import AnimalList from "@/modules/animal/presentation/AnimalList";
import Banner from "@/modules/shared/custom/Banner";
import AnimalFilter from "@/modules/animal/presentation/AnimalFilter";
import { Link } from "expo-router";
import Spacing from "@/modules/shared/custom/Spacing";
import { spacing } from "@/modules/shared/themes/styles";

export default function Explore() {
  return (
    <View style={styles.container}>
      <Banner title="Welcome to Adopt All" description="A place to find animals in need" />
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
