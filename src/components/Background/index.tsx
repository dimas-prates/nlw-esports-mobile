import { ImageBackground } from "react-native";
import { styles } from "./styles";
import backgroundImageGalaxy from "../../assets/background-galaxy.png";

interface Props {
  children: React.ReactNode;
}
export function Background({ children }: Props) {
  return (
    <ImageBackground source={backgroundImageGalaxy} defaultSource={backgroundImageGalaxy} style={styles.container}>
      {children}
    </ImageBackground>
  );
}