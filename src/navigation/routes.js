import SplashScreen from "../containers/SplashScreen";
import HomeScreen from "../containers/HomeScreen";
import VesselSearchScreen from "../containers/Vessel/VesselSearchScreen";
import VesselListResultScreen from "../containers/Vessel/VesselListResultScreen";
import CreateVesselScreen from "../containers/Vessel/CreateVesselScreen";

export const AppRoutes = {
    Main: { screen: HomeScreen },
    VesselSearch: { screen: VesselSearchScreen },
    VesselListResult: { screen: VesselListResultScreen },
}

export const SwitchRoutes = {
    Splash: { screen: SplashScreen }
}

export const ModalRoutes = {
    CreateVessel: { screen: CreateVesselScreen }
}