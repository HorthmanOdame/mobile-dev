import { FlatList } from 'react-native';
import { UserItem } from '../../../components/common';
import { styles } from './styles';

export default function UserList({ users }) {
  const renderUserItem = ({ item, index }) => <UserItem user={item} index={index} />;

  return (
    <FlatList
      data={users}
      renderItem={renderUserItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={true}
      style={styles.listContainer}
    />
  );
}
