import { Stack } from "expo-router";

export default function ApplicationsLayout() {
    return <Stack>
        <Stack.Screen name="index" options={{
            headerTitle: "Applications Index"
        }} />
        < Stack.Screen name="create" options={{ headerTitle: "Create Application" }} />
        <Stack.Screen name="[id]" options={{ headerTitle: "Application Details" }} />
    </Stack>;
}
