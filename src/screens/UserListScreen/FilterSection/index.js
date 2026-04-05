import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import { useState } from 'react';
import { styles } from './styles';

export default function FilterSection({ roles, selectedRole, onFilterChange, onClearFilter, searchQuery, onSearch }) {
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
    <View style={styles.mainContainer}>
      <View style={styles.searchFilterRow}>
        <View style={styles.filterContainer}>
          <TouchableOpacity style={styles.filterIconButton} onPress={toggleFilter}>
            <Text style={styles.filterText}>
              {selectedRole ? selectedRole : 'All Users'}
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

        <TextInput
          style={styles.searchInput}
          placeholder="Search users..."
          value={searchQuery}
          onChangeText={onSearch}
          placeholderTextColor="#999"
        />
      </View>
    </View>
  );
}
