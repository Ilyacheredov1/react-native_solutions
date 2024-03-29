import React from "react";
import { StyleSheet, Text, View } from "react-native";

import List, { List as ListModel } from "./List";

const list: ListModel = {
    name: "Total Points",
    items: [
        { name: "Nathaniel Fitzgerald", points: "$3.45" },
        { name: "Lawrence Fullter Fitzgerald", points: "$3.45" },
        { name: "Jacob Mullins", points: "$3.45" },
        { name: "Jesus Lewis", points: "$3.45" },
        { name: "Johnny Marr", points: "$2.56" }
    ]
};


const Accordion: React.FC = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Markets</Text>

            {
                [1, 2, 3, 4, 5, 6].map((it: number) => (
                    <List key={it}  {...{ list }} />
                ))
            }

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f4f4f6",
        padding: 16
    },
    title: {
        fontSize: 32,
        fontWeight: "bold"
    }
});


export default Accordion;