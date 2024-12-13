import { View } from "react-native";
import { router } from "expo-router";

import { Button } from "@/components/button";
import { StepsList } from "@/components/steps_list";
import { Welcome } from "@/components/welcome";

export default function Index(){
    return (
        <View style={{flex:1, padding: 40, gap: 40}}>
            <Welcome />
            <StepsList />
            <Button onPress={()=> router.navigate("/home")}>
                <Button.Title> Começar </Button.Title>
            </Button>
        </View>
    );
}