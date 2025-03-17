// /app/explore/[id].tsx
import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useLocalSearchParams } from 'expo-router';
import AnimalAvatar from "@/components/animals/AnimalAvatar";

const AnimalDetail = () => {
    const router = useRouter();
    const animalDetails = useLocalSearchParams();

    return (
        <View>
            {/* <AnimalAvatar image={animalDetails.image} size="fullProfile" /> */}
            <Text>{animalDetails.name}</Text>
            <Text>{animalDetails.species}</Text>
            <Text>{animalDetails.distance}</Text>
            <Text>Neutered: {animalDetails.neutered}</Text>
            <Text>{animalDetails.age}</Text>
            <Text>{animalDetails.description}</Text>

            <TouchableOpacity onPress={() => {
                router.dismissAll()
                router.replace({
                    pathname: '/applications/create',
                    params: { animalId: animalDetails.id }
                });
            }}>
                <Text style={{ color: 'blue' }}>Adopt</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AnimalDetail;

