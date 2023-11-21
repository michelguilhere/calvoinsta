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
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import image7 from "../../assets/image7.png";
import image8 from "../../assets/image8.png";
import Logo from "../../assets/logocalvo.svg";
import Message from "../../assets/seguindo.svg";
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
        <Stroke  width={140}/>
        <Logo width={105} height={60} />
        <Message width={80}/>
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
                <Bookmark width={110}/>

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
                Legenda 1
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
                source={{ uri: "https://img.quizur.com/f/img5ff9fe94256128.05761491.png?lastEdited=1610219208" }}
              />
              <Text style={styles.contentHeaderLeftText}>Messi C.</Text><Points />
            </View>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{ uri: "https://f.i.uol.com.br/fotografia/2020/02/10/15813740235e41da475cca0_1581374023_3x2_lg.jpg" }}
              />
              <Text style={styles.contentHeaderLeftText}>Ney C.</Text><Points />
            </View>

            
          </View>
          <View style={styles.contentImage}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={image3} />
              <Image style={styles.image} source={image4} />
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
                source={{ uri: "https://www.jornaldocomercio.com/_midias/jpg/2023/04/24/52840507290_1d3e927af3_o-10192383.jpg" }}
              />
              <Text style={styles.contentHeaderLeftText}>Mauricio C.</Text><Points />
            </View>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{ uri: "https://www.rbsdirect.com.br/filestore/8/2/3/2/4/7/4_51dfce5e5bf3935/4742328_29768b203af9a1f.jpg?w=700" }}
              />
              <Text style={styles.contentHeaderLeftText}>Enner Violencia</Text><Points />
            </View>

            
          </View>
          <View style={styles.contentImage}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={image5} />
              <Image style={styles.image} source={image6} />
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
                source={{ uri: "https://cortesdecabelo2020.com/wp-content/uploads/2022/06/souza_barbearia1-770px-947px.jpg" }}
              />
              <Text style={styles.contentHeaderLeftText}>Calvo de cria</Text><Points />
            </View>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{ uri: "https://3.bp.blogspot.com/-9qCQVH-0QEE/T5tvr55GyXI/AAAAAAAAAaU/n6O0KLDcoh0/s1600/Alvin+love.jpg" }}
              />
              <Text style={styles.contentHeaderLeftText}>Calvin</Text><Points />
            </View>

            
          </View>
          <View style={styles.contentImage}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={image7} />
              <Image style={styles.image} source={image8} />
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
    backgroundColor: "white",
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
