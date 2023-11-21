import { LinearGradient } from "expo-linear-gradient";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import Bookmark from "../../assets/Bookmark.svg";
import Comment from "../../assets/Comment.svg";
import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.png";
import foto4 from "../../assets/foto4.png";
import Heart from "../../assets/Heart.svg";
import image from "../../assets/image.png";
import image2 from "../../assets/image2.png";
import Logo from "../../assets/logo.svg";
import Message from "../../assets/message.svg";
import Points from "../../assets/points.svg";
import Share from "../../assets/Share.svg";
import Stroke from "../../assets/stroke.svg";

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
  {
    id: Math.random().toString(36).substring(2, 15),
    pathURL: foto,
  },
];

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo width={127} height={49} />
        <View style={styles.headerOptions}>
          <Stroke />
          <Message />
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
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{ uri: "https://pbs.twimg.com/media/E8tyqB7WQAIjm6U?format=jpg&name=medium" }}
              />
              <Text style={styles.contentHeaderLeftText}>Neymar C.</Text><Points />
            </View>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{ uri: "https://instagram.fpoa12-1.fna.fbcdn.net/v/t51.2885-19/362103504_168876816204434_5501704256855316351_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fpoa12-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=pW-eayKrr9UAX-N-NHI&edm=ACWDqb8BAAAA&ccb=7-5&oh=00_AfDFnZ6NxwiBHl-e9I0yfIKvTT6HpKH6qLcEogEHz8h0bw&oe=654EA77E&_nc_sid=ee9879" }}
              />
              <Text style={styles.contentHeaderLeftText}>Cristiano C.</Text><Points />
            </View>

            
          </View>
          <View style={styles.contentImage}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={image} />
              <Image style={styles.image} source={image2} />
            </View>
          </View>

          <View style={styles.contentFooter}>
            <View style={styles.contentFooterOptions}>
              <View style={styles.contentFooterOptionsButton}>
                <Heart />
                <Comment />
                <Share />
                <Bookmark />
              </View>
            </View>

            <View style={styles.contentFooterTexts}>
              <Text
                style={[styles.contentFooterText1, styles.contentFooterText]}
              >
                Legenda para teste
              </Text>
              <Text
                style={[styles.contentFooterText2, styles.contentFooterText]}
              >
                Veja todos comentários
              </Text>
              <Text
                style={[styles.contentFooterText3, styles.contentFooterText]}
              >
                3 horas atrás
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{ uri: "https://github.com/rodrigo322.png" }}
              />
              <Text style={styles.contentHeaderLeftText}>Rodrigo Lucas</Text>
            </View>
            <Points />
          </View>
          <View style={styles.contentImage}>
            <Image source={image2} />
          </View>

          <View style={styles.contentFooter}>
            <View style={styles.contentFooterOptions}>
              <View style={styles.contentFooterOptionsButton}>
                <Heart />
                <Comment />
                <Share />
              </View>
              <Bookmark />
            </View>

            <View style={styles.contentFooterTexts}>
              <Text
                style={[styles.contentFooterText1, styles.contentFooterText]}
              >
                clicslab How IOT is changing the world?
              </Text>
              <Text
                style={[styles.contentFooterText2, styles.contentFooterText]}
              >
                View all 3 comments
              </Text>
              <Text
                style={[styles.contentFooterText3, styles.contentFooterText]}
              >
                3 hours ago See Translation
              </Text>
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
    backgroundColor: "#000000",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 50,
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
    marginRight: 14,
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
  contentHeader: {
    height: 52,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  contentHeaderLeft: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contentHeaderLeftImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  contentHeaderLeftText: {
    color: "#fff",
  },
  contentImage: {
    width: "100%",
    height: 355,
  },
  imageContainer:{
    flexDirection: 'row',
  },
  image: {
    width: "46%", // Ajuste a largura conforme necessário.
    height: 300, // Ajuste a altura conforme necessário.
    margin: 10, // Adicione margens para separar as imagens.
  },
  contentFooter: {},
  contentFooterOptions: {
    height: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  contentFooterOptionsButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  contentFooterText: {
    color: "#fff",
  },
  contentFooterTexts: {
    paddingLeft: 20,
    gap: 10,
  },
  contentFooterText1: {
    fontSize: 14,
  },

  contentFooterText2: {
    fontSize: 14,
  },
  contentFooterText3: {
    fontSize: 10,
  },
});
