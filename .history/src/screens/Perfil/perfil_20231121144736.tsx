import { LinearGradient } from "expo-linear-gradient";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";


import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.png";
import foto4 from "../../assets/foto4.png";
import foto5 from "../../assets/michel.png";
import image from "../../assets/image.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.png";
import Logo from "../../assets/logocalvo.svg";
import Message from "../../assets/seguindo.svg";
import Stroke from "../../assets/paravc.svg";

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto2,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto3,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto5,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
];

export function Perfil() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      <Stroke  width={165}/>
        <Logo width={185} height={55} />
        <Message width={90}/>
        <View style={styles.headerOptions}>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
      >
        <View style={styles.stores}>
          <FlatList
            data={DATA}
            horizontal={true}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <LinearGradient
                colors={["#D52865", "#F7B55A"]}
                style={styles.storesCard}
                key={item.item.id}
              >
                <Image
                  style={styles.storesCardImage}
                  source={item.item.pathURL}
                />
              </LinearGradient>
            )}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.contentImage}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={image} />
              <Image style={styles.image} source={image2} />
              <Image style={styles.image} source={image3} />
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.contentImage}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={image3} />
              <Image style={styles.image} source={image4} />
              <Image style={styles.image} source={image5} />
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.contentImage}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={image5} />
              <Image style={styles.image} source={image6} />
              <Image style={styles.image} source={image2} />
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.contentImage}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={image7} />
              <Image style={styles.image} source={image8} />
              <Image style={styles.image} source={image} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 140,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 0,
    marginTop: -50,
    backgroundColor: "#d265fc",
  },
  headerOptions: {
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
    gap: 20,
  },
  stores: {
    height: 104,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    paddingVertical: 10,
  },
  storesCard: {
    borderRadius: 50,
    marginRight: 15,
  },
  storesCardImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    margin: 2,
  },
  content: {
    width: "100%",
    marginBottom: 20,
  },
  contentImage: {
    width: "100%",
    height: 150,
  },
  imageContainer:{
    flexDirection: 'row',
  },
  image: {
    width: "30%", // Ajuste a largura conforme necessário.
    height: 150, // Ajuste a altura conforme necessário.
    margin: 7, // Adicione margens para separar as imagens.
  },
});
