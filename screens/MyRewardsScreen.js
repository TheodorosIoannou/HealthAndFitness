import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useRewards } from '../contexts/RewardsContext';


const RunningBadge = ({ name, icon, description }) => (
  <View style={styles.badgeContainer}>
    <Icon name={icon} size={30} color="white" />
    <Text style={styles.badgeText}>{name}</Text>
    <Text style={styles.badgeDescription}>{description}</Text>
  </View>
);

const BadgeSlider = ({ badges }) => (
  <SwiperFlatList
    autoplay
    autoplayDelay={10}
    autoplayLoop
    index={0}
    showPagination
  >
    {badges.map((badge, index) => (
      <View key={index} style={styles.slide}>
        {/* Add borderRadius style to Image components */}
        {React.isValidElement(badge) ? (
          React.cloneElement(badge, {
            style: [badge.props.style, { borderRadius: 8 }],
          })
        ) : (
          badge
        )}
      </View>
    ))}
  </SwiperFlatList>
);

const AwardedBadgesScreen = () => {
  const { awardedBadges } = useRewards(); // This accesses the awarded badges
  // Filter for running and water badges
  const runningBadgesAwarded = awardedBadges.filter(badge => badge.description.includes('run'));
  const waterBadgesAwarded = awardedBadges.filter(badge => badge.description.includes('water'));


  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>
        {' '}
        <Icon name="gift" size={20} color="black" /> My Rewards
      </Text>
      {/* Running Badges Section */}
      <View style={[styles.sectionContainer, styles.greenBackground]}>
        <Text style={styles.heading}>
          {' '}
          <Icon name="running" size={20} color="white" /> Running Badges Available
        </Text>

        {/* Add running badges or relevant components here */}
        <BadgeSlider
          badges={[
            <RunningBadge name="5K Beginner" icon="medal" description="Complete a 5km run" />,
            <Image source={require('../icons/5kmRun.png')} />,
            <RunningBadge name="10K Pro" icon="medal" description="Complete 10km run" />,
            <Image source={require('../icons/10kmRun.png')} style={{ alignSelf: 'center' }} />,
            <RunningBadge name="10K Master" icon="medal" description="Complete 10km run" />,
            <Image source={require('../icons/15kmRun.png')} style={{ alignSelf: 'center' }} />,
          ]}
        />

      </View>
      {/* Water Intake Badges Section */}
      <View style={[styles.sectionContainer, styles.lightBlueBackground]}>
        <Text style={styles.heading}>
          {' '}
          <Icon name="tint" size={20} color="white" /> Water Intake Badges Available
        </Text>

        {/* Add water intake badges or relevant components here */}
        <BadgeSlider
          badges={[
            <RunningBadge name="Beginner" icon="medal" description="Reach 100L water int" />,
            <Image source={require('../icons/100LWaterIntake.png')} style={{ alignSelf: 'center' }} />,
            <RunningBadge name="Pro" icon="medal" description="Reach 200L water int" />,
            <Image source={require('../icons/200LWaterIntake.png')} style={{ alignSelf: 'center' }} />,
            <RunningBadge name=" Master" icon="medal" description="Reach 300L water int" />,
            <Image source={require('../icons/300LWaterIntake.jpg')} style={{ alignSelf: 'center' }} />,
          ]}
        />
      </View>

      {/* Analysis Section */}
      <View style={[styles.sectionContainer, styles.grayBackground]}>
        <Text style={[styles.heading, { textAlign: 'center', alignSelf: 'center', textDecorationLine: 'underline' }]}>Analysis</Text>
      
        {/* Running Badges Awarded Section */}
        <Text style={[styles.heading, { textAlign: 'left', alignSelf: 'flex-start' }]}>Running Badges Awarded</Text>
        {runningBadgesAwarded.length > 0 ? (
          <BadgeSlider
            badges={runningBadgesAwarded.map(badge => (
              <View key={badge.name} style={{ alignItems: 'center' }}>
                <Text style={styles.badgeText}>{badge.name}</Text>
                <Text style={styles.badgeDescription}>{badge.description}</Text>
                <Image source={badge.icon} style={{ width: 100, height: 100 }} />
              </View>
            ))}
          />
        ) : (
          <Text style={styles.badgeDescription}>No running badges awarded yet.</Text>
        )}
        
        {/* Water Intake Badges Awarded Section */}
        <Text style={[styles.heading, { textAlign: 'left', alignSelf: 'flex-start' }]}>Water Intake Badges Awarded</Text>
        {waterBadgesAwarded.length > 0 ? (
          <BadgeSlider
            badges={waterBadgesAwarded.map(badge => (
              // Assuming WaterIntakeBadge is similar to RunningBadge but potentially with different styling or functionality
              <View key={badge.name} style={{ alignItems: 'center' }}>
                <Text style={styles.badgeText}>{badge.name}</Text>
                <Text style={styles.badgeDescription}>{badge.description}</Text>
                <Image source={badge.icon} style={{ width: 100, height: 100 }} />
              </View>
            ))}
          />
        ) : (
          <Text style={styles.badgeDescription}>No water intake badges awarded yet.</Text>
        )}
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'left',
    alignItems: 'left',

  },

  title: {
    marginTop: 0,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },

  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,

    padding: 20,
  },
  sectionContainer: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 8,
    width: '100%',
  },
  goalSection: {
    marginTop: 10,
  },
  greenBackground: {
    backgroundColor: '#005425',
  },
  lightBlueBackground: {
    backgroundColor: '#00D1FF',
  },
  grayBackground: {
    backgroundColor: '#949494',
  },
  heading: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  body: {
    color: 'white',
    fontSize: 14,
    marginBottom: 0,
  },
  analysisContainer: {
    flexDirection: 'row', // Make it a horizontal flexbox

    marginBottom: 10, // Adjust as needed
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
  },
  badgeContainer: {
    flexDirection: 'column', // Change to row

    justifyContent: 'space-between', // Add spacing between badges
    marginVertical: 10,
    paddingHorizontal: 20, // Add padding to each badge for spacing
  },
  badgeText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  badgeDescription: {
    color: 'white',
    fontSize: 12,
    marginTop: 2,
  },
});

export default AwardedBadgesScreen;
