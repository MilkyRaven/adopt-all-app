import { Slot, useSegments } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {
  // const segments = useSegments();

  // useEffect(() => {
  //   console.log("Current stack:", segments);
  // }, [segments]);

  return <Slot />;
}
