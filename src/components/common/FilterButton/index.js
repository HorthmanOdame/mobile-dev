import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export default function FilterButton({ role, isActive, onPress }) {
  return (
    <TouchableOpacity
      style={[styles.filterButton, isActive && styles.filterButtonActive]}
      onPress={onPress}
    >
      <Text style={[styles.filterButtonText, isActive && styles.filterButtonTextActive]}>
        {role}
      </Text>
    </TouchableOpacity>
  );
}
