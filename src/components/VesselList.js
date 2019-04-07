import React from "react";
import { FlatList, View, Text } from "react-native";
import InputRow from "./InputRow";
import styles from "./styles";
import Label from "./Label";
import { VesselSVG } from "../assets";
import dateFormat from "../helpers/dateFormat";

const VesselItem = ({mVessel}) => (
    <View style={styles.vesselItemContainer}>
        <View style={styles.vesselInfoContainer}>
            <InputRow direction="row">
                <Text style={styles.vesselNameText}>{mVessel.vessel_name}</Text>
            </InputRow>
            <InputRow direction="row">
                <Label direction="row" label="Voyage In" />
                <Text style={styles.vesselDataText}>{mVessel.voyage_in ? mVessel.voyage_in : "-"}</Text>
            </InputRow>
            <InputRow direction="row">
                <Label direction="row" label="Voyage Out" />
                <Text style={styles.vesselDataText}>{mVessel.voyage_out ? mVessel.voyage_out : "-"}</Text>
            </InputRow>
            <InputRow direction="row">
                <Label direction="row" label="ETA" />
                <Text style={styles.vesselDataText}>{dateFormat(mVessel.eta, "d/m/Y H:i:s")}</Text>
            </InputRow>
            <InputRow direction="row">
                <Label direction="row" label="ETB" />
                <Text style={styles.vesselDataText}>{dateFormat(mVessel.etb, "d/m/Y H:i:s")}</Text>
            </InputRow>
            <InputRow direction="row">
                <Label direction="row" label="ETD" />
                <Text style={styles.vesselDataText}>{mVessel.etd ? dateFormat(mVessel.etd, "d/m/Y H:i:s") : "-"}</Text>
            </InputRow>
        </View>
        <VesselSVG width={100} height={100} />
    </View>
)

const VesselList = ({mVessels, state, onRefresh, loading}) => (
    <FlatList 
        data={mVessels}
        extraData={state}
        onRefresh={onRefresh}
        refreshing={loading}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View style={{height: 20}}></View>}
        ListFooterComponent={<View style={{height: 10}}></View>}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <VesselItem mVessel={item} />}
    />
)
export default VesselList;