import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

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
import React from "react";
import { ProfileBody } from "../screenComponents/ProfileBody";



export function Mais() {
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
    marginRight: 10,
  },
  storesCardImage: {
    width: 64,
    height: 64,
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
