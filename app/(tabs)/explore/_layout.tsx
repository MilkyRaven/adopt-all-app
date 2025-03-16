import { AnimalFilterProvider } from "@/modules/animal/presentation/FilterContext";
import { Stack } from "expo-router";

export default function ExploreLayout() {
    return (
        <AnimalFilterProvider>
            <Stack>
                <Stack.Screen name="index" options={{
                    headerTitle: "Explore Page"
                }} />
                <Stack.Screen name="modal" options={{ presentation: "modal", headerTitle: "Filter animals" }} />
                <Stack.Screen name="[id]" options={{ headerTitle: "Animal Details" }} />
            </Stack>
        </AnimalFilterProvider>)
}
