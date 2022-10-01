import React,{ View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator} from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { THEME } from "../../theme";
import { CheckCircle } from "phosphor-react-native";
import { Heading } from "../Heading";
import * as Clipboard from "expo-clipboard";
import { useState } from "react";

interface Props extends ModalProps{
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [isCopping, setIsCopping] = useState(false);

  async function handleCopyDiscordUserToClipboard() {
    setIsCopping(true);
    await Clipboard.setStringAsync(discord);
    Alert.alert("User copied!", "Copied discord user to the copy transfer area");
    setIsCopping(false);
  }

  return (
    <Modal {...rest} transparent statusBarTranslucent animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons name='close' size={20} color={THEME.COLORS.CAPTION_500} />
          </TouchableOpacity>

          <CheckCircle size={64}
            color={THEME.COLORS.SUCCESS}
            weight="bold" />

          <Heading title={"Let's play!"}
            subtitle={"Now you just play!"}
            style={ {alignItems:"center",marginTop:24}} />

          <Text style={styles.label} >
            Add on Discord
          </Text>
          <TouchableOpacity style={styles.discordButton}
            onPress={handleCopyDiscordUserToClipboard}
            disabled={isCopping}>
            <Text style={styles.discord}>
              {isCopping ? <ActivityIndicator color={ THEME.COLORS.PRIMARY} /> : discord}
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}