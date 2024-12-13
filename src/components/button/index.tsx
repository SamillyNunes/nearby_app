import { 
    TouchableOpacity, 
    TouchableOpacityProps, 
    Text, 
    TextProps,
    ActivityIndicator
} from "react-native";
import { IconProps as TablerIconProps } from "@tabler/icons-react-native";

import { s } from "./styles";
import { colors } from "@/styles/theme";

type ButtonProps =  TouchableOpacityProps & {
    isLoading?: boolean,
}

// Ao utilizar o spread operator e passar essa variavel para o 
// touchable opacity, da a opcao de poder passar outro atributo (nesse caso
// referente ao TouchableOpacityProps) para o TouchableOpacity
function Button({children, style, isLoading=false, ...rest}: ButtonProps){
    return <TouchableOpacity 
        style={[s.container, style]} 
        activeOpacity={0.5} 
        disabled={isLoading}
        {...rest}
    >
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

type IconProps = {
    icon: React.ComponentType<TablerIconProps>,
}

function Icon({icon: Icon}: IconProps){
    return <Icon size={24} color={colors.gray[100]} />
}

// Fazendo isso de Componente.Componente2 faz com que seja possivel
// personalizar esse componente 2 de fora
Button.Title = Title;
Button.Icon = Icon;

export { Button };