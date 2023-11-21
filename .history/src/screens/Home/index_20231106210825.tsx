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

import Bookmark from "../../assets/salvar.svg";
import Comment from "../../assets/comentario.svg";
import foto from "../../assets/foto.png";
import foto2 from "../../assets/foto2.png";
import foto3 from "../../assets/foto3.png";
import foto4 from "../../assets/foto4.png";
import Heart from "../../assets/coracao.svg";
import image from "../../assets/image.png";
import image2 from "../../assets/image2.png";
import Logo from "../../assets/logocalvo.svg";
import Message from "../../assets/mensagem.svg";
import Points from "../../assets/pontos.svg";
import Share from "../../assets/enviar.svg";
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
        <Logo width={125} height={600} />
        <Stroke />
        <Message />
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
                source={{ uri: "https://i.pinimg.com/564x/48/32/3a/48323a5f86f02f9640da72093adfdcd4.jpg" }}
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
                source={{ uri: "https://pbs.twimg.com/media/E8tyqB7WQAIjm6U?format=jpg&name=medium" }}
              />
              <Text style={styles.contentHeaderLeftText}>Neymar C.</Text><Points />
            </View>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{ uri: "https://i.pinimg.com/564x/48/32/3a/48323a5f86f02f9640da72093adfdcd4.jpg" }}
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
                Legenda para teste2
              </Text>
              <Text
                style={[styles.contentFooterText2, styles.contentFooterText]}
              >
                Veja todos comentários2
              </Text>
              <Text
                style={[styles.contentFooterText3, styles.contentFooterText]}
              >
                3 horas atrás2
              </Text>
            </View>
          </View>
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
                source={{ uri: "https://i.pinimg.com/564x/48/32/3a/48323a5f86f02f9640da72093adfdcd4.jpg" }}
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
                Legenda para teste3
              </Text>
              <Text
                style={[styles.contentFooterText2, styles.contentFooterText]}
              >
                Veja todos comentários3
              </Text>
              <Text
                style={[styles.contentFooterText3, styles.contentFooterText]}
              >
                3 horas atrás3
              </Text>
            </View>
          </View>
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
                source={{ uri: "https://i.pinimg.com/564x/48/32/3a/48323a5f86f02f9640da72093adfdcd4.jpg" }}
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
                Legenda para teste4
              </Text>
              <Text
                style={[styles.contentFooterText2, styles.contentFooterText]}
              >
                Veja todos comentários4
              </Text>
              <Text
                style={[styles.contentFooterText3, styles.contentFooterText]}
              >
                3 horas atrás4
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
    backgroundColor: "purple",
    alignItems: "center",
  },
  header: {
    width: "100%",
    height: 56,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 0,
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
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
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
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  contentHeaderLeftText: {
    color: "black",
  },
  contentImage: {
    width: "100%",
    height: 320,
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
    gap: 5,
  },
  contentFooterText: {
    color: "black",
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
