import { useCallback, useContext } from "react";
import useFetch from "../hooks/useFetch";
import { SafeAreaView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'



export default function eventDetails () {
    const params = useSearchParams();
    const router = useRouter();

    const { data, isLoading, error, refetch } = useFetch("event-details", {
        id: params.id,
    });

    const [activeTab, setActiveTab] = useState(tabs[0]);
    const [refreshing, setRefreshing] = useState(false);
  
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      refetch()
      setRefreshing(false)
    }, []);

    return (
        <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['#FDB21F', '#FF4D00']}
        style={styles.linearGradient}
        > 
          <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsHorizontalScrollIndicator={false}>
              <View style={{flex:1, padding: 10}}>
              </View>
            </ScrollView>
          </SafeAreaView>
        </LinearGradient>
    )


}