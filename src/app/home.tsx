import { Alert, Text, View } from "react-native";

import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { CategoriesList, CategoriesProps } from "@/components/categories_list";

export default function Home(){
    const [categories, setCategories] = useState<CategoriesProps>([]);
    const [categorySelected, setCategorySelected] = useState("");

    async function fetchCategories(){
        try {
            const { data } = await api.get("/categories");
            setCategories(data);
            setCategorySelected(data[0].id);
        } catch (error) {
            console.log(error);
            Alert.alert("Categorias", "Não foi possível carregar as categorias.");
        }
    }

    useEffect(()=>{
        fetchCategories();
    }, []);

    return (
        <View style={{flex: 1}}>
            <CategoriesList 
                data={categories} 
                onSelect={setCategorySelected}
                selected={categorySelected}
            />
        </View>
    );
}