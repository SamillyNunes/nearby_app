import { Alert, Text, View } from "react-native";
import { useEffect, useState } from "react";

import { api } from "@/services/api";
import { CategoriesList, CategoriesProps } from "@/components/categories_list";
import { PlaceProps } from "@/components/place";
import { PlacesList } from "@/components/places_list";

type MarketsProps = PlaceProps & {
    
}

export default function Home(){
    const [categories, setCategories] = useState<CategoriesProps>([]);
    const [categorySelected, setCategorySelected] = useState("");
    const [markets, setMarkets] = useState<MarketsProps[]>([]);

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

    async function fetchMarkets(){
        try {
            if(!categorySelected) return;
            const response = await api.get("/markets/category/"+categorySelected);
            setMarkets(response.data);
        } catch (error) {
            console.log(error);
            Alert.alert('Locais', 'Não foi possívei carregar os locais');
        }
    }

    useEffect(()=>{
        fetchCategories();
    }, []);

    useEffect(()=> {
        fetchMarkets();
    },[categorySelected]);

    return (
        <View style={{flex: 1, backgroundColor: "#CECECE"}}>
            <CategoriesList 
                data={categories} 
                onSelect={setCategorySelected}
                selected={categorySelected}
            />

            <PlacesList data={markets} />
        </View>
    );
}