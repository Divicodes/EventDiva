import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const EventItem = React.forwardRef(({ event, isExpanded, handleCardPress }, ref) => {
    const getColorForExperienceType = (experienceType) => {
        let rgb;
        switch (experienceType.S) {
            case '2':
                rgb = '242, 33, 94'; // Pink
                break;
            case '3':
                rgb = '190, 58, 142'; // Purple
                break;
            case '1':
                rgb = '59, 82, 129'; // Blue
                break;
            // ... add more cases as needed
            case '4':
                rgb = '47, 72, 88'; // Blue
                break;
            case '5':
                rgb = '0, 0, 0'; // Blue
                break;
            case '6':
                rgb = '65, 158, 87'; // Blue
                break;

            case '7':
                rgb = '0, 132, 115'; // Blue
                break;
            case '8':
                rgb = '0, 102, 116'; // Blue
                break;
            default:
                rgb = '0, 0, 0'; // Default is black
                break;
        }
        return `rgba(${rgb}, 0.60)`; // Return color with 0.60 opacity
    }

    const boxStyle = isExpanded ? [styles.box, styles.expandedBox] : styles.box;
    const backgroundColor = getColorForExperienceType(event.ExperienceType);


    return (
        <TouchableOpacity
            onPress={handleCardPress}
        >

            <View ref={ref} style={[boxStyle, { backgroundColor }]}>

                {isExpanded ? (
                    <View>
                        <Text style={styles.expandedTitleText}>
                            {event?.EventName.S}
                        </Text>
                        <Text style={styles.expandedSubTitle}>
                            Time:
                        </Text>
                        <Text style={styles.expandedSubText}>
                            🕑 {event?.Time.S} at {event?.Date.S}
                        </Text>
                        <Text style={styles.expandedSubTitle}>
                            Place:
                        </Text>
                        <Text style={styles.expandedSubText}>
                            📍 {event?.Location.S}
                        </Text>
                        <Text style={styles.expandedSubTitle}>
                            Event Type:
                        </Text>
                        <Text style={styles.expandedSubText}>
                            🕺 {event?.EventType.S}
                        </Text>
                        <Text style={styles.expandedSubTitle}>
                            Additional Details:
                        </Text>
                        <Text style={styles.expandedSubText}>
                            ✔ {event?.AdditionalDetails.S}
                        </Text>
                    </View>
                ) : (
                    <View>
                        <Text style={styles.titleText}>
                            {event?.EventName.S}
                        </Text>
                        <Text style={styles.timeText}>
                            🕑 {event?.Time.S} at {event?.Date.S}
                        </Text>
                        <Text style={styles.placeText}>
                            📍 {event?.Location.S}
                        </Text>
                    </View>
                )}


            </View>

        </TouchableOpacity>
    )
});


const styles = StyleSheet.create({
    box: {
        alignItems: 'flex-start',
        backgroundColor: 'rgba(0, 0, 0, 0.60)',
        borderRadius: 15,
        paddingLeft: 25,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 12,
    },
    expandedBox: {
        height: 810,  // Example value, adjust accordingly
        // Add more styles to differentiate from the regular box
    },
    titleText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    expandedTitleText: {
        color: 'white',
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 24,
    },
    expandedSubTitle: {
        color: 'white',
        marginTop: 30,
        fontWeight: 'bold',
        fontSize: 16,
    },
    expandedSubText: {
        color: 'white',
        marginTop: 5,
        fontSize: 14,
    },
    timeText: {
        color: 'white',
        marginTop: 5

    },
    placeText: {
        color: '#D0D0D0',
        marginTop: 5

    },

})

export default EventItem;
