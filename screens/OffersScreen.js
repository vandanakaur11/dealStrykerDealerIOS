import * as React from "react";
import { View, Text, StyleSheet, Dimensions, Pressable, FlatList } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OfferComp from "../components/OfferComp";

const win = Dimensions.get("window");
const DATA = [
    { id: "01", name: "Toyota corolla Hybrid", subName: "LE 4dr Sedan Blueprint", year: "2021",offer:"make" },
    { id: "02", name: "V60 Cross Country", subName: "T5 4dr Wagon AWD Fusion Red Mettalic", year: "2021" },
    { id: "03", name: "V60 Cross Country", subName: "T5 4dr Wagon AWD Fusion Red Mettalic", year: "2021" },
    { id: "04", name: "Toyota corolla Hybrid", subName: "LE 4dr Sedan Blueprint", year: "2021",offer:"make" },
    { id: "05", name: "V60 Cross Country", subName: "T5 4dr Wagon AWD Fusion Red Mettalic", year: "2021",offer:"make" },
    { id: "06", name: "V60 Cross Country", subName: "T5 4dr Wagon AWD Fusion Red Mettalic", year: "2021" },
];
function OffersScreen({ navigation }) {
    const renderItem = ({ item }) => (
        <Pressable>
            <OfferComp check={item} navigation={navigation} />
        </Pressable>
    );
    return (
        <View style={styles.main}>
            <View style={styles.headingWrap}>
                <Text style={styles.heading}>Offers</Text>
            </View>
            <View style={styles.wrap}>
                <FlatList numColumns={1} data={DATA} renderItem={renderItem} keyExtractor={(item) => item.id} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        flex: 1,
        paddingBottom: win.height / 10,
    },
    heading: {
        fontSize: win.height / 30,
        color: "#0F3749",
    },
    wrap: {
        marginHorizontal: win.width / 20,
    },
    headingWrap: {
        height: win.height / 15,
        justifyContent: "center",
        paddingHorizontal: win.width / 25,
    },
});

export default OffersScreen;
