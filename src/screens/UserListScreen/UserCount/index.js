import { View, Text } from 'react-native';
import { styles } from './styles';

export default function UserCount({ count }) {
  return (
    <View style={styles.countContainer}>
      <Text style={styles.countText}>
        Showing {count} user{count !== 1 ? 's' : ''}
      </Text>
    </View>
  );
}
