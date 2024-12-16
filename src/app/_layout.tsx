import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import {colors} from "@/styles/theme";
import { Loading } from "@/components/loading";

import {
    useFonts,
    Rubik_600SemiBold,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
} from "@expo-google-fonts/rubik";

/// Responsible for the app routes setting
/// The app will observe this file for the first of all when started
export default function Layout(){
    /// Here we guarantee the fonts will be loaded. Obs.: This process
    /// will be async
    const [fontsHaveLoaded] = useFonts({
        Rubik_600SemiBold,
        Rubik_400Regular,
        Rubik_500Medium,
        Rubik_700Bold,
    });

    if(!fontsHaveLoaded){
        return <Loading />;
    }
    
    return <GestureHandlerRootView style={{flex: 1}}>
        <Stack
            screenOptions={{
                headerShown: false, 
                contentStyle: {backgroundColor: colors.gray[100]}
            }} 
        />

    </GestureHandlerRootView>
    
}