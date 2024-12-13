import { Stack } from "expo-router";
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

    return <Stack //navigation type in stack
        screenOptions={{
            headerShown: false, // omit the head
            contentStyle: {backgroundColor: colors.gray[100]}
        }} 
    />;
}