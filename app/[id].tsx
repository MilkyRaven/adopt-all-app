// /app/explore/[id].tsx
import { View, Text, Button } from "react-native";
import { Link, useLocalSearchParams } from 'expo-router';
import AnimalAvatar from "@/components/animals/AnimalAvatar";

const AnimalDetail = () => {
    const animalDetails = useLocalSearchParams();
    return (
        <View>
            {/* <AnimalAvatar image={animalDetails.image} size="fullProfile"></AnimalAvatar> */}
            <Text>{animalDetails.name}</Text>
            <Text>{animalDetails.species}</Text>
            <Text>{animalDetails.distance}</Text>
            <Text>Neutered: {animalDetails.neutered}</Text>
            <Text>{animalDetails.age}</Text>
            <Text>{animalDetails.description}</Text>
            <Link
                href={{
                    pathname: '/applications/create',
                    params: { id: animalDetails.id }
                }}>
                Adopt
            </Link>

        </View>
    );
};

export default AnimalDetail;
