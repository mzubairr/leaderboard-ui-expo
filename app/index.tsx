import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.conatiner}>
      <View style={styles.topContainer}>
        <Text style={styles.topHeader}>Leader Board</Text>
        <View style={styles.mainCardContainer}>
          {[3, 1, 2].map(() => {
            return <View style={styles.mainCard}>
              <Image
                style={styles.mainCardImg}
              />
              <Text style={styles.mainCardTitle}>Angel</Text>
              <View style={styles.rankContainer}>
                <Text style={styles.rankContainerTitle}>3</Text>
              </View>
            </View>
          })}
        </View>
      </View>
      <FlatList data={[1, 2, 3, 4, 5]} renderItem={({ item, index }) => {
        return (
          <View style={styles.cardConatiner}>
            <View style={styles.leftCardContainer}>
              <Text style={styles.cardIndex}>{index + 1}</Text>
              <Image
                style={styles.cardImg}
              />
              <Text style={styles.cardTitle}>Zubair</Text>
            </View>
            <View style={styles.rightCardContainer}>
              <Text style={styles.rightCardContainerTitle}>39,8909</Text>
            </View>
          </View>
        )
      }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
  },
  topContainer: {},
  topHeader: {},
  mainCardContainer: {},
  mainCard: {},
  mainCardImg: {},
  mainCardTitle: {},
  rankContainer: {},
  rankContainerTitle: {},
  cardConatiner: {},
  leftCardContainer: {},
  cardIndex: {},
  cardImg: {},
  cardTitle: {},
  rightCardContainer: {},
  rightCardContainerTitle: {},
});
