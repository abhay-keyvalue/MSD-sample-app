import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {useEvents, useDiscoverEvents} from 'sample-sdk-7000';

import ButtonPrimary from './buttonPrimary';

const EventScreen = () => {
  const {discoverEvents} = useDiscoverEvents();
  const {track} = useEvents();

  const discover = () => {
    discoverEvents();
  };
  const track1 = () => {
    track('pageView', {
      page_type: 'pdp',
      page_name: 'PDP',
      source_prodid: '39596296700022',
    });
  };

  const track2 = () => {
    track('removeFromCart', {
      page_type: 'pdp',
      page_name: 'PDP',
      source_prodid: '39596296700022',
    });
  };

  const track3 = () => {
    track('rightSwipe', {
      page_type: 'pdp',
      page_name: 'PDP',
      source_prodid: '39596296700022',
      epoch: 100,
      slot_id: '1',
    });
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <ButtonPrimary onPress={discover} buttonText={'Discover'} />
        <ButtonPrimary onPress={track1} buttonText={'Page View'} />
        <ButtonPrimary onPress={track2} buttonText={'Remove From Cart'} />
        <ButtonPrimary onPress={track3} buttonText={'Right Swipe'} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
});

export default EventScreen;
