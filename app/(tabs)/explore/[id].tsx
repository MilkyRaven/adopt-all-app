// /app/explore/[id].tsx
import { View } from "react-native";
import Text from "@/modules/shared/custom/Text";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from 'expo-router';
import AnimalAvatar from "@/modules/animal/presentation/AnimalAvatar";
import { spacing } from "@/modules/shared/themes/styles";
import Spacing from "@/modules/shared/custom/Spacing";
import AnimalLabel from "@/modules/animal/presentation/AnimalLabel";
import Button from "@/modules/shared/custom/Button";

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

