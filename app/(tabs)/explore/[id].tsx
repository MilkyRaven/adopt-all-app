// /app/explore/[id].tsx
import { View } from "react-native";
import Text from "@/components/shared/Text";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from 'expo-router';
import AnimalAvatar from "@/components/animals/AnimalAvatar";
import { spacing } from "@/modules/shared/themes/styles";
import Spacing from "@/components/shared/Spacing";
import AnimalLabel from "@/components/animals/AnimalLabel";
import Button from "@/components/shared/Button";

const AnimalDetail = () => {
    const router = useRouter();
    const animalDetails = useLocalSearchParams();
    return (
        <View style={{ margin: spacing.md }}>
            <View style={{ flexDirection: 'row', gap: spacing.md, alignItems: "flex-end" }}>
                <AnimalAvatar image={animalDetails.image as string} size="fullProfile" />
                <View>
                    <Text type="h1">{animalDetails.name}</Text>
                    <Spacing type="sm" />
                    <Text type="h3">{animalDetails.species}</Text>
                    <Spacing type="xs" />
                    <Text type="h3">{animalDetails.distance} Km from you</Text>
                    <Spacing type="sm" />
                    <View style={{ flexDirection: 'row', gap: spacing.sm }}>
                        <AnimalLabel labelText={animalDetails.age as string} />
                        <AnimalLabel labelText={animalDetails.neutered ? "Neutered" : "Not Neutered"} />
                    </View>
                </View>
            </View>
            <Spacing />
            <Text>{animalDetails.description}</Text>
            <Spacing />
            <View style={{ alignSelf: "center" }}>
                <Button title="Adopt" onPress={() => {
                    router.dismissAll()
                    router.replace({
                        pathname: '/applications/create',
                        params: { animalId: animalDetails.id }
                    });
                }} />
            </View>
        </View>
    );
};

export default AnimalDetail;

