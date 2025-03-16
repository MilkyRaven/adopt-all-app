import { Stack } from "expo-router";

export default function ExploreLayout() {
    return <Stack>
        <Stack.Screen name="index" options={{
            headerTitle: "Explore Page"
        }} />
        <Stack.Screen name="[id]" options={{ headerTitle: "Animal Details" }} />
    </Stack>;
}
