import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { WebView } from "react-native-webview";
import * as Location from "expo-location";
import { useLocalSearchParams } from "expo-router";
import { router } from "expo-router";
import { Pressable, Text } from "react-native";

export default function Mapa() {
    const { mercado } = useLocalSearchParams();

    const [location, setLocation] = useState(null);

    const coordenadasMercados = {
        "Assaí": {
            latitude: -23.448936724334573,
            longitude: -46.72213593222252,
        },
        "Extra": {
            latitude: -23.449098438026972,
            longitude: -46.73500870955093,
        },
        "Sonda": {
            latitude: -23.441395756839984,
            longitude: -46.72193793920557,
        },
    };

    useEffect(() => {
        (async () => {
            const { status } =
                await Location.requestForegroundPermissionsAsync();

            if (status !== "granted") return;

            const posicao = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.High,
            });

            setLocation(posicao.coords);
        })();
    }, []);

    if (!location) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ActivityIndicator size="large" />
            </View>
        );
    }

    const destino = coordenadasMercados[mercado];

    const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<link
rel="stylesheet"
href="https://unpkg.com/leaflet/dist/leaflet.css"/>

<style>
html,body,#map{
height:100%;
margin:0;
padding:0;
}
</style>

</head>

<body>

<div id="map"></div>

<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>

<script>

const usuario = [${location.latitude}, ${location.longitude}];
const destino = [${destino.latitude}, ${destino.longitude}];

const map = L.map('map').setView(usuario, 50);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        maxZoom: 20,
        attribution: '&copy; OpenStreetMap'
    }
).addTo(map);

L.marker(usuario)
    .addTo(map)
    .bindPopup("Você");

L.marker(destino)
    .addTo(map)
    .bindPopup("${mercado}");

fetch(
    "https://router.project-osrm.org/route/v1/driving/" +
    ${location.longitude} + "," + ${location.latitude} + ";" +
    ${destino.longitude} + "," + ${destino.latitude} +
    "?overview=full&geometries=geojson"
)
.then(response => response.json())
.then(data => {

    const coords = data.routes[0].geometry.coordinates;

    const rota = coords.map(coord => [
        coord[1],
        coord[0]
    ]);

    const linha = L.polyline(rota, {
        color: "blue",
        weight: 6
    }).addTo(map);

    map.fitBounds(linha.getBounds(), {
        padding: [40, 40],
        maxZoom: 18
    });

})
.catch(error => {
    console.log(error);
});

</script >

</body >
</html >
        `;

    return (
        <>
            <Pressable
                onPress={() => router.back()}
                style={{
                    position: "absolute",
                    top: 50,
                    left: 20,
                    zIndex: 999,
                    backgroundColor: "white",
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    borderRadius: 8,
                    elevation: 5,
                }}
            >
                <Text>← Voltar</Text>
            </Pressable>
            <WebView
                originWhitelist={["*"]}
                source={{ html }}
                style={{ flex: 1 }}
            />
        </>
    );
}