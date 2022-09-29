import { Image, FlatList } from "react-native";
import { styles } from "./styles";
import logoImage from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);
  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate("game", { id, title, bannerUrl });
  }

  useEffect(() => {
    fetch("http://192.168.15.26:3333/games")
      .then(response => response.json())
      .then(data => setGames(data));
  }, []);
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImage} style={styles.logo} />
        <Heading title="Find your duo!" subtitle="Select the game you want to play" />

        <FlatList data={games} keyExtractor={item => item.id} renderItem={({ item }) => (
          <GameCard data={item} onPress={() => handleOpenGame(item)} />
        )} horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.contentList} />
      </SafeAreaView>
    </Background>
  );
}