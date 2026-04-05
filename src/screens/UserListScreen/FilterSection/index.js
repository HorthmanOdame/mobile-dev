import { View, TouchableOpacity, Text } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';

export default function FilterSection({ roles, selectedRole, onFilterChange, onClearFilter }) {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  const handleFilterSelect = (role) => {
    onFilterChange(role);
    setIsFilterVisible(false);
  };

  const handleShowAll = () => {
    onClearFilter();
    setIsFilterVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.filterIconButton} onPress={toggleFilter}>
        <Text style={styles.filterText}>
          {selectedRole ? `Filter: ${selectedRole}` : 'Filter: All Users'}
        </Text>
        <Text style={styles.dropdownArrow}>{isFilterVisible ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {isFilterVisible && (
        <View style={styles.dropdownContainer}>
          <TouchableOpacity 
            style={[styles.dropdownItem, !selectedRole && styles.dropdownItemActive]} 
            onPress={handleShowAll}
          >
            <Text style={[styles.dropdownText, !selectedRole && styles.dropdownTextActive]}>
              All Users
            </Text>
          </TouchableOpacity>
          
          {roles.map((role) => (
            <TouchableOpacity
              key={role}
              style={[styles.dropdownItem, selectedRole === role && styles.dropdownItemActive]}
              onPress={() => handleFilterSelect(role)}
            >
              <Text style={[styles.dropdownText, selectedRole === role && styles.dropdownTextActive]}>
                {role}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}
