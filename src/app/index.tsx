import { Button } from "@/components/button";
import { StepsList } from "@/components/steps_list";
import { Welcome } from "@/components/welcome";
import {View, Text} from "react-native";

export default function Index(){
    return (
        <View style={{flex:1, padding: 40, gap: 40}}>
            <Welcome />
            <StepsList />
            <Button isLoading>
                <Button.Title> Começar </Button.Title>
            </Button>
        </View>
    );
}