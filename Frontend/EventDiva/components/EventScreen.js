import { useState } from 'react';
import { useRef } from 'react';
import { ScrollView } from 'react-native';
import {StyleSheet, View, Text, TouchableOpacity, ActivityIndicator, FlatList} from 'react-native';
import EventItem from './EventItem'
import useFetch from '../hooks/useFetch';



export default function EventScreen() {
    const { data, isLoading, error } = useFetch();
    const [expandedEventId, setExpandedEventId] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const scrollViewRef = useRef(null);
    const eventItemRefs = useRef({});


    const handleCardPress = (eventId) => {
        if (eventId === expandedEventId) {
            setExpandedEventId(null);  // Collapse if the same item is clicked again
        } else {
            setExpandedEventId(eventId);  // Expand the clicked item
            eventItemRefs.current[eventId].measure((fx, fy, width, height, px, py) => {
                const adjustedPosition = scrollPosition + (py - scrollPosition) + 30 - height;
                scrollViewRef.current.scrollTo({ y: adjustedPosition, animated: true });
            });
        }
    };


    return (
    <ScrollView 
    ref={scrollViewRef} 
    onScroll={event => {
      setScrollPosition(event.nativeEvent.contentOffset.y);
    }}
    scrollEventThrottle={16}>
        <View style={{marginTop: 10}}>
            {isLoading ? (
                <ActivityIndicator color='#ffffff'/>
            ): error ? (
                <Text>Something wernt Wrong</Text>
            ) : (
                data?.map((event) =>
                <EventItem
                    ref={(el) => eventItemRefs.current[event.divav1.S] = el}
                    event={event}
                    key={event.divav1.S}
                    isExpanded={event.divav1.S === expandedEventId}
                    handleCardPress={() => handleCardPress(event.divav1.S)}
                    />
                )
            )}
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    
  });
  