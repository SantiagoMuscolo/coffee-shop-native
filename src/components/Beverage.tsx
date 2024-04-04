import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { filters } from "../constants/constants";
import { useState } from "react";
import { Filter } from "../utils/types/types";

function Beverage() {
    const [selected, setSelected] = useState(1)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Beverages</Text>
            <View style={styles.filterGroup}>
                {
                    filters?.map((filter: Filter, index: number) => (
                        <TouchableOpacity  style={selected === index ? styles.selectedFilter : styles.filterContainer} onPress={() => setSelected(index)}>
                            <>
                            <Image style={styles.image} source={filter.photo} />
                            <Text style={selected === index ? styles.selectedTextFilter : styles.textFilter}>{filter.name}</Text>
                            </>
                        </TouchableOpacity >
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft: 5
    },
    title: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 10,
        marginLeft: 4
    },
    image: {
        width: 60,
        height: 53,
        backgroundColor: '#fff',
        borderRadius: 100,  
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#CCCCCC',
        borderRadius: 50,
        padding: 5,
        width: 170,
        gap: 10
    },
    selectedFilter: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#8B4513',
        color: '#fff',
        borderRadius: 50,
        padding: 5,
        width: 170,
        gap: 10
    },
    filterGroup: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 15
    },
    textFilter: {
        fontWeight: '600',
    },
    selectedTextFilter: {
        fontWeight: '600',
        color: '#fff'
    }
})

export default Beverage;