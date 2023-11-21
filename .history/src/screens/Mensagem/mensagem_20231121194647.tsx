import {
    Image,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
  } from "react-native";
  
  import Logo from "../../assets/logocalvo.svg";
  import Message from "../../assets/seguindo.svg";
  import Stroke from "../../assets/paravc.svg";
  import React from "react";
  
  
  
  export function Mensagem() {
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
  });
  