import { FlatList } from "react-native";

import { Category } from "../category";
import { s } from "./styles";

// Observe que esse caso é uma lista de tipos
export type CategoriesProps = {
    id: string,
    name: string
}[]

type Props = {
    data: CategoriesProps
}

export function CategoriesList({ data }: Props){
    console.log(data);
    return <FlatList 
        data={data}
        keyExtractor={(item)=> item.id}
        renderItem={({item})=> <Category name={item.name} iconId={item.id} /> }
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={s.content}
        style={s.container}
    />
}