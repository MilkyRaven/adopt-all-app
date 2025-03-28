import { View, StyleSheet } from "react-native";
import React, { useCallback, useRef } from "react";
import LocationTracker from "@/modules/location/presentation/LocationTracker";
import AnimalList from "@/modules/animal/presentation/AnimalList";
import Banner from "@/modules/shared/custom/Banner";
import AnimalFilter from "@/modules/animal/presentation/AnimalFilter";
import { Link, useFocusEffect, usePathname } from "expo-router";
import Spacing from "@/modules/shared/custom/Spacing";
import { spacing } from "@/modules/shared/themes/styles";

import { useGetAnimals } from "@/modules/animal/infraestructure/hooks/useGetAnimals";

export default function Explore() {
  const { animals, loading, error, refetch } = useGetAnimals();
  const currentPath = usePathname();
  const prevPathRef = useRef<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      if (prevPathRef.current?.includes("/explore")) {
      } else if (prevPathRef.current) {
        refetch()
      }
      return () => {
        prevPathRef.current = currentPath;
      };
    }, [currentPath])
  );

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
      <AnimalList animals={animals} loading={loading} error={error} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md
  }
});
