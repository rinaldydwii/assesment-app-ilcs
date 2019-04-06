import React from "react";
import { withNavigation } from "react-navigation";
import { View, Text, Dimensions, FlatList, TouchableOpacity } from "react-native";
import { VesselSVG, TruckSVG, ContainerSVG, TariffSimulationSVG, DepoSVG } from "../assets";
import styles from "./styles";

const ICON_SIZE = (Dimensions.get('window').width - 96 )/ 3;

const MENU_LIST = [
    {
        name: "Vessel",
        icon: (size) => <VesselSVG width={size} height={size} />,
        path: "VesselSearch"
    },
    {
        name: "Truck",
        icon: (size) => <TruckSVG width={size} height={size} />,
        path: null
    },
    {
        name: "Container",
        icon: (size) => <ContainerSVG width={size} height={size} />,
        path: null
    },
    {
        name: "Tariff Simulation",
        icon: (size) => <TariffSimulationSVG width={size} height={size} />,
        path: null
    },
    {
        name: "Depo",
        icon: (size) => <DepoSVG width={size} height={size} />,
        path: null
    }
];

const MenuItem = ({navigation, menu, index}) => (
    <TouchableOpacity 
        style={[styles.menuItemContainer, (index+1)%3 === 0 ? {marginRight: 0} : null, (index+3)%3 === 0 ? {marginLeft: 0} : null]}
        onPress={() => navigation.navigate(menu.path)}
    >
        { menu.icon(ICON_SIZE) }
        <Text style={styles.menuItemText}>{menu.name}</Text>
    </TouchableOpacity>
)

const MenuItemWithNavigation = withNavigation(MenuItem)

const Menu = () => {
    return (
        <View style={styles.menuContainer}>
            <FlatList 
                data={MENU_LIST}
                numColumns={3}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({item, index}) => <MenuItemWithNavigation menu={item} index={index} /> }
            />
        </View>
    )
}
export default Menu;