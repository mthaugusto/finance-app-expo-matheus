import { StatusBar } from "expo-status-bar";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Movements from "../../components/Movements";
import Actions from "../../components/Actions";

const list = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "320,00",
    date: "17/09/2022",
    type: 0, // 0 despesas e 1 receita
  },
  {
    id: 2,
    label: "Pix Cliente X",
    value: "4.000,00",
    date: "22/09/2022",
    type: 1,
  },
  {
    id: 3,
    label: "Salário",
    value: "4.000,00",
    date: "29/09/2022",
    type: 1,
  },
];

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name={"Matheus Leite"} />
      <Balance saldo="7.680,00" gastos="-320,00" />
      <Actions />
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => item.id}
        // Para não termos a barra de scroll vertical aparecendo, mas ela vai rolar
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAFA",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  },
});
