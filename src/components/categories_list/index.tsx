import { FlatList } from "react-native";

import { Category } from "../category";
import { s } from "./styles";

// Observe que esse caso é uma lista de tipos
export type CategoriesProps = {
    id: string,
    name: string,
}[]

type Props = {
    data: CategoriesProps,
    selected: string,
    onSelect: (id: string)=> void,
}

export function CategoriesList({ data, selected, onSelect }: Props){
    console.log(data);
    return <FlatList 
        data={data}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=> <Category 
            name={item.name} 
            iconId={item.id} 
            onPress={()=> onSelect(item.id)} 
            isSelected={item.id === selected}
        /> }
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.content}
        style={s.container}
    />
}