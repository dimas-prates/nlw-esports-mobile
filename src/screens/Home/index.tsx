import { View, Image, FlatList } from "react-native";

import { styles } from "./styles";
import logoImage from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";
import { GAMES } from "../../utils/games";
export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImage} style={styles.logo} />
      <Heading title="Find your duo!" subtitle="Select the game you want to play" />
      <FlatList data={GAMES} keyExtractor={item => item.id} renderItem={({ item }) => (
        <GameCard data={item} />
      )} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentList} />

    </View>
  );
}