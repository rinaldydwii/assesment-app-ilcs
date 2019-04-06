import React from "react";
import { FlatList, View, Text } from "react-native";
import InputRow from "./InputRow";
import styles from "./styles";
import Label from "./Label";
import { VesselSVG } from "../assets";

const DATA = [
    {
        id: 1,
        vessel_name: "MV Meratus Manado",
        voyage_in: "VOY03",
        voyage_out: "VOY04",
        eta: "2019-04-10 10:00",
        etb: "2019-04-10 15:25",
        etd: "2019-04-15 15:00",
    },
    {
        id: 2,
        vessel_name: "MV Meratus Manado",
        voyage_in: "VOY03",
        voyage_out: "VOY04",
        eta: "2019-04-10 10:00",
        etb: "2019-04-10 15:25",
        etd: "2019-04-15 15:00",
    },
    {
        id: 3,
        vessel_name: "MV Meratus Manado",
        voyage_in: "VOY03",
        voyage_out: "VOY04",
        eta: "2019-04-10 10:00",
        etb: "2019-04-10 15:25",
        etd: "2019-04-15 15:00",
    },
    {
        id: 4,
        vessel_name: "MV Meratus Manado",
        voyage_in: "VOY03",
        voyage_out: "VOY04",
        eta: "2019-04-10 10:00",
        etb: "2019-04-10 15:25",
        etd: "2019-04-15 15:00",
    }
]

const VesselItem = ({vessel}) => (
    <View style={styles.vesselItemContainer}>
        <View style={styles.vesselInfoContainer}>
            <InputRow direction="row">
                <Text style={styles.vesselNameText}>{vessel.vessel_name}</Text>
            </InputRow>
            <InputRow direction="row">
                <Label direction="row" label="Voyage In" />
                <Text style={styles.vesselDataText}>{vessel.voyage_in}</Text>
            </InputRow>
            <InputRow direction="row">
                <Label direction="row" label="Voyage Out" />
                <Text style={styles.vesselDataText}>{vessel.voyage_out}</Text>
            </InputRow>
            <InputRow direction="row">
                <Label direction="row" label="ETA" />
                <Text style={styles.vesselDataText}>{vessel.eta}</Text>
            </InputRow>
            <InputRow direction="row">
                <Label direction="row" label="ETB" />
                <Text style={styles.vesselDataText}>{vessel.etb}</Text>
            </InputRow>
            <InputRow direction="row">
                <Label direction="row" label="ETD" />
                <Text style={styles.vesselDataText}>{vessel.etd}</Text>
            </InputRow>
        </View>
        <VesselSVG width={100} height={100} />
    </View>
)

const VesselList = () => (
    <FlatList 
        data={DATA}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View style={{height: 20}}></View>}
        ListFooterComponent={<View style={{height: 10}}></View>}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <VesselItem vessel={item} />}
    />
)
export default VesselList;