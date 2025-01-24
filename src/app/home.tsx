import { Alert, Text, View } from "react-native";
import { useEffect, useState } from "react";
import MapView, { Callout, Marker } from "react-native-maps";

import { api } from "@/services/api";
import { CategoriesList, CategoriesProps } from "@/components/categories_list";
import { PlaceProps } from "@/components/place";
import { PlacesList } from "@/components/places_list";

type MarketsProps = PlaceProps & {
  latitude: number;
  longitude: number;
};

const currentLocation = {
  latitude: -9.752377995732859,
  longitude: -36.65794977748799,
};

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [categorySelected, setCategorySelected] = useState("");
  const [markets, setMarkets] = useState<MarketsProps[]>([]);

  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCategorySelected(data[0].id);
    } catch (error) {
      console.log(error);
      Alert.alert("Categorias", "Não foi possível carregar as categorias.");
    }
  }

  async function fetchMarkets() {
    try {
      if (!categorySelected) return;
      const response = await api.get("/markets/category/" + categorySelected);
      setMarkets(response.data);
      console.log("markets:!");
      console.log(markets);
    } catch (error) {
      console.log(error);
      Alert.alert("Locais", "Não foi possívei carregar os locais");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMarkets();
  }, [categorySelected]);

  return (
    <View style={{ flex: 1, backgroundColor: "#CECECE" }}>
      <CategoriesList
        data={categories}
        onSelect={setCategorySelected}
        selected={categorySelected}
      />

      <MapView 
        style={{flex: 1}}
        initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
        }}
      >
        <Marker
            identifier="current"
            coordinate={currentLocation}
            image={require("@/assets/location.png")}
        />

        {markets.map((item)=> (
            <Marker
                key={item.id}
                identifier={item.id}
                coordinate={{
                    latitude: item.latitude,
                    longitude: item.longitude,
                }}
                image={require("@/assets/pin.png")}
            />
        ))}


      </MapView>

      <PlacesList data={markets} />
    </View>
  );
}
