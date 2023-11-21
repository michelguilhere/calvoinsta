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

export function Perfil() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Stroke  width={150}/>
        <Logo width={125} height={55} />
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
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{ uri: "https://pbs.twimg.com/media/E8tyqB7WQAIjm6U?format=jpg&name=medium" }}
              />
            </View>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{ uri: "https://i.pinimg.com/564x/48/32/3a/48323a5f86f02f9640da72093adfdcd4.jpg" }}
              />
            </View>

            
          </View>
          <View style={styles.contentImage}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={image} />
              <Image style={styles.image} source={image2} />
              <Image style={styles.image} source={image3} />
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
            </View>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{ uri: "https://f.i.uol.com.br/fotografia/2020/02/10/15813740235e41da475cca0_1581374023_3x2_lg.jpg" }}
              />
            </View>

            
          </View>
          <View style={styles.contentImage}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={image3} />
              <Image style={styles.image} source={image4} />
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
            </View>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{ uri: "https://www.rbsdirect.com.br/filestore/8/2/3/2/4/7/4_51dfce5e5bf3935/4742328_29768b203af9a1f.jpg?w=700" }}
              />
            </View>

            
          </View>
          <View style={styles.contentImage}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={image5} />
              <Image style={styles.image} source={image6} />
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
            </View>
            <View style={styles.contentHeaderLeft}>
              <Image
                style={styles.contentHeaderLeftImage}
                source={{ uri: "https://3.bp.blogspot.com/-9qCQVH-0QEE/T5tvr55GyXI/AAAAAAAAAaU/n6O0KLDcoh0/s1600/Alvin+love.jpg" }}
              />
            </View>

            
          </View>
          <View style={styles.contentImage}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={image7} />
              <Image style={styles.image} source={image8} />
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
    height: 32,
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
    borderColor: "#ca2dfd",
  },
  contentImage: {
    width: "100%",
    height: 320,
  },
  imageContainer:{
    flexDirection: 'row',
  },
  image: {
    width: "10%", // Ajuste a largura conforme necessário.
    height: 150, // Ajuste a altura conforme necessário.
    margin: 8, // Adicione margens para separar as imagens.
  },
});
