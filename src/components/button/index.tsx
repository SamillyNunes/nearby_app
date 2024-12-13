import { 
    TouchableOpacity, 
    TouchableOpacityProps, 
    Text, 
    TextProps,
    ActivityIndicator
} from "react-native";

import { s } from "./styles";
import { colors } from "@/styles/theme";

type ButtonProps =  TouchableOpacityProps & {
    isLoading?: boolean,
}

function Button({children, style, isLoading=false}: ButtonProps){
    return <TouchableOpacity style={[s.container, style]} activeOpacity={0.5} disabled={isLoading}>
        {
            isLoading ? 
                <ActivityIndicator size="small" color={colors.gray[100]} /> 
                : children
        }
    </TouchableOpacity>;
}

function Title({children}: TextProps){
    return <Text style={s.title}>
        {children}
    </Text>;
}

Button.Title = Title;

export { Button };