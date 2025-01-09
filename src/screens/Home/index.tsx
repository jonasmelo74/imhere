import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from "react-native";
import { styles } from "./styles";

import { Participant } from "../../components/Participant";

export function Home() {
  const participants = ["Rodrigo", "Diego", "Dani", "Rafael", "Rodrigo1", "Teste", "Teste2", "Teste3", "Teste4", "Teste5"];

  function handleAddParticipant() {
    if(participants.includes("Rodrigo")) {
      return Alert.alert("Erro", "Participante já cadastrado");
    }
  }

  function handleAddParticipantRemove(name: string) {
    Alert.alert("Remover participante", `Deseja remover o participante ${name}?`, [
      {
        text: "Sim",
        onPress: () => Alert.alert("Participante removido com sucesso!")        
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);


    console.log(`Removendo o participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6b6b6b"}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map((participant) => (
            <Participant 
              key={participant}
              name={participant} 
              onRemove={() => handleAddParticipantRemove("Rodrigo")}/>
          ))
        }
      </ScrollView> */}

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemove={() => handleAddParticipantRemove(item)}
          />
        )}
      ListEmptyComponent={() => (
        <Text style={styles.listEmptyText}>
          Nenhum participante cadastrado
        </Text>
      )}
      />
    </View>

  );

}
