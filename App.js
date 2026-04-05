import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import userData from './src/data/dataset.json';
import { Header, FilterSection, UserCount, UserList } from './src/screens/UserListScreen';
import { filterUsersByRole, ROLES } from './src/utils/filterUsers';
import { globalStyles } from './src/styles/globalStyles';

export default function App() {
  const [selectedRole, setSelectedRole] = useState(null);

  const filteredUsers = filterUsersByRole(userData, selectedRole);

  const handleFilterChange = (role) => {
    setSelectedRole(role);
  };

  const handleClearFilter = () => {
    setSelectedRole(null);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={globalStyles.container}>
        <StatusBar style="dark" />
        <Header />
        <FilterSection
          roles={ROLES}
          selectedRole={selectedRole}
          onFilterChange={handleFilterChange}
          onClearFilter={handleClearFilter}
        />
        <UserList users={filteredUsers} />
        <UserCount count={filteredUsers.length} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
