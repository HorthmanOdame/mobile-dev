import { View, Text } from 'react-native';
import { styles } from './styles';

export default function UserItem({ user, index }) {
  return (
    <View style={styles.userItem}>
      <Text style={styles.userNumber}>{index + 1}.</Text>
      <Text style={styles.userName}>{user.name}</Text>
    </View>
  );
}
