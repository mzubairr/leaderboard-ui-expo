import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.conatiner}>
      <View style={styles.topContainer}>
        <Text style={styles.topHeader}>Leader Board</Text>
        <View style={styles.mainCardContainer}>
          {topUser.map((item, index) => {
            return <View style={[styles.mainCard, index !== 1 && { marginTop: 20 }]}>
              <Image
                style={styles.mainCardImg}
                resizeMode='cover'
                source={{ uri: item.image }}
              />
              <Text style={styles.mainCardTitle}>{item.username}</Text>
              <View style={styles.rankContainer}>
                <Text style={styles.rankContainerTitle}>{item.rank}</Text>
              </View>
            </View>
          })}
        </View>
      </View>
      <FlatList data={userList} renderItem={({ item, index }) => {
        return (
          <View style={styles.cardConatiner}>
            <View style={styles.leftCardContainer}>
              <Text style={styles.cardIndex}>{index + 1}</Text>
              <Image
                style={styles.cardImg}
                resizeMode='cover'
                source={{ uri: item.image }}
              />
              <Text style={styles.cardTitle}>{item.username}</Text>
            </View>
            <View style={styles.rightCardContainer}>
              <Text style={styles.rightCardContainerTitle}>{item.score}</Text>
            </View>
          </View>
        )
      }} />
    </SafeAreaView>
  );
}

const userList = [
  {
    "username": "sara_jones",
    "score": 85432,
    "image": "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    "username": "mike_roberts",
    "score": 92111,
    "image": "https://randomuser.me/api/portraits/men/34.jpg"
  },
  {
    "username": "linda_smith",
    "score": 70245,
    "image": "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    "username": "emily_white",
    "score": 78920,
    "image": "https://randomuser.me/api/portraits/women/60.jpg"
  },
  {
    "username": "daniel_kim",
    "score": 87499,
    "image": "https://randomuser.me/api/portraits/men/29.jpg"
  },
  {
    "username": "amanda_rich",
    "score": 93210,
    "image": "https://randomuser.me/api/portraits/women/13.jpg"
  },
  {
    "username": "tyler_jackson",
    "score": 71500,
    "image": "https://randomuser.me/api/portraits/men/77.jpg"
  },
  {
    "username": "chloe_king",
    "score": 84355,
    "image": "https://randomuser.me/api/portraits/women/86.jpg"
  },
  {
    "username": "natalie_chen",
    "score": 86187,
    "image": "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    "username": "brandon_lee",
    "score": 78894,
    "image": "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    "username": "laura_harris",
    "score": 91467,
    "image": "https://randomuser.me/api/portraits/women/58.jpg"
  },
  {
    "username": "aaron_clark",
    "score": 85333,
    "image": "https://randomuser.me/api/portraits/men/25.jpg"
  },
  {
    "username": "olivia_wood",
    "score": 73818,
    "image": "https://randomuser.me/api/portraits/women/76.jpg"
  },
  {
    "username": "ethan_hall",
    "score": 89912,
    "image": "https://randomuser.me/api/portraits/men/83.jpg"
  },
  {
    "username": "grace_martin",
    "score": 92287,
    "image": "https://randomuser.me/api/portraits/women/19.jpg"
  },
  {
    "username": "noah_walker",
    "score": 87090,
    "image": "https://randomuser.me/api/portraits/men/92.jpg"
  },
  {
    "username": "mia_turner",
    "score": 79034,
    "image": "https://randomuser.me/api/portraits/women/39.jpg"
  }
]

const topUser = [
  {
    "username": "kevin_nguyen",
    "score": 99123,
    "image": "https://randomuser.me/api/portraits/men/11.jpg",
    "rank": 3
  },
  {
    "username": "john_doe",
    "score": 98345,
    "image": "https://randomuser.me/api/portraits/men/54.jpg",
    "rank": 1
  },
  {
    "username": "james_cole",
    "score": 96488,
    "image": "https://randomuser.me/api/portraits/men/7.jpg",
    "rank": 2
  }
]



const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: "#272B36",
  },
  topContainer: {
    backgroundColor: "#1B1D28",
    padding: 30,
    paddingBottom: 40,
    marginBottom: 10,
    gap: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  topHeader: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  mainCardContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10
  },
  mainCard: {
    backgroundColor: "#272B36",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    gap: 10,
  },
  mainCardImg: {
    height: 70,
    width: 60,
    borderRadius: 10
  },
  mainCardTitle: {
    color: "#fff"
  },
  rankContainer: {
    backgroundColor: "#FFA600",
    width: 30,
    height: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: -20
  },
  rankContainerTitle: {
    color: "#fff"
  },
  cardConatiner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  leftCardContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  cardIndex: {
    color: "#fff"
  },
  cardImg: {
    height: 40,
    width: 40,
    borderRadius: 40,
    marginHorizontal: 10
  },
  cardTitle: {
    color: "#fff"
  },
  rightCardContainer: {},
  rightCardContainerTitle: {
    color: "#A87D3C"
  },
});
