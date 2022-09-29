import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";
import { DuoInfo } from "../DuoInfo";
import { THEME } from "../../theme";
import { GameController } from "phosphor-react-native";

export interface DuoCardProps {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props {
  data: DuoCardProps;
  onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Name" value={data.name} />
      <DuoInfo label="Time playing" value={`${data.yearsPlaying} year(s)`} />
      <DuoInfo label="Time Available"
        value={`${data.weekDays.length} days \u2022 ${data.hourStart} - ${data.hourEnd}`} />
      <DuoInfo label="Voice Channel" value={data.useVoiceChannel ? "Yes" : "No"} colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT} />

      <TouchableOpacity style={styles.button} onPress={onConnect}>
        <GameController color={THEME.COLORS.TEXT} size={20} />
        <Text style={styles.buttonTitle}>
          Connect
        </Text>
      </TouchableOpacity>
    </View>
  );
}