import { StyleSheet, View } from "react-native";
import Text from "@/modules/shared/custom/Text";
import AnimalAvatar from "./AnimalAvatar";
import { AnimalWithDistance } from "@/modules/animal/domain/entities/Animal";
import AnimalLabel from "./AnimalLabel";
import { borderRadius, colors, spacing } from "@/modules/shared/themes/styles";
import { useTheme } from "@react-navigation/native";



export default function AnimalThumbnail({
    image,
    name,
    species,
    neutered,
    age,
    distance
}: AnimalWithDistance) {
    const theme = useTheme()
    return (
        <View style={[styles.animalContainer, { backgroundColor: theme.colors.card }]}>
            <AnimalAvatar image={image} size="thumbnail" />
            <View style={styles.details}>
                <Text type="h2">{name}</Text>
                <Text type="support">{species}</Text>
                <Text type="support">{distance} Km from you</Text>
                <View style={styles.labelContainer}>
                    <AnimalLabel labelText={neutered ? 'Neutered' : 'Not Neutered'} />
                    <AnimalLabel labelText={age} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    animalContainer: {
        flexDirection: 'row',
        padding: spacing.md,
        borderRadius: borderRadius.md,
        gap: spacing.md,
        width: "100%"
    },
    labelContainer: {
        flexDirection: 'row',
        gap: spacing.xs
    },
    details: {
        gap: spacing.xs
    }
})