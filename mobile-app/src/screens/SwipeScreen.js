import { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

const sampleProfiles = [
  { id: '1', name: 'Jane', age: 26, bio: 'Coffee lover and traveler' },
  { id: '2', name: 'Mia', age: 24, bio: 'Gym, books, and Sunday brunch' },
  { id: '3', name: 'Sara', age: 27, bio: 'Designer who loves hiking' }
];

function SwipeScreen({ user }) {
  const [index, setIndex] = useState(0);
  const [matches, setMatches] = useState(0);

  const profile = useMemo(() => sampleProfiles[index], [index]);

  const swipe = action => {
    if (action === 'like') {
      setMatches(prev => prev + 1);
    }
    setIndex(prev => prev + 1);
  };

  if (!profile) {
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyTitle}>No more profiles for now</Text>
        <Text style={styles.emptySubtitle}>Matches today: {matches}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>
          {profile.name}, {profile.age}
        </Text>
        <Text style={styles.bio}>{profile.bio}</Text>
        <Text style={styles.bio}>Signed in as {user?.name || user?.phone}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity style={[styles.actionBtn, styles.pass]} onPress={() => swipe('pass')}>
          <Text style={styles.actionText}>Pass</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, styles.like]} onPress={() => swipe('like')}>
          <Text style={styles.actionText}>Like</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 18,
    padding: 22,
    marginTop: 24
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.text
  },
  bio: {
    marginTop: 10,
    color: '#344054'
  },
  actions: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  actionBtn: {
    flex: 1,
    marginHorizontal: 6,
    borderRadius: 12,
    alignItems: 'center',
    padding: 14
  },
  pass: {
    backgroundColor: '#fda4af'
  },
  like: {
    backgroundColor: colors.secondary
  },
  actionText: {
    color: colors.white,
    fontWeight: '700'
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  emptyTitle: {
    fontSize: 24,
    color: colors.text,
    fontWeight: '700'
  },
  emptySubtitle: {
    marginTop: 8,
    color: '#475467'
  }
});

export default SwipeScreen;
