import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {useEvents, useDiscoverEvents} from 'sample-sdk-7000';

import ButtonPrimary from './buttonPrimary';

const EventScreen = () => {
  const {discoverEvents} = useDiscoverEvents();
  const {track} = useEvents();
  const pageCorrelationId = '3a93346b-6236-4fb6-8a40-4301f9c78533';

  const discover = () => {
    discoverEvents();
  };
  const track1 = () => {
    track('Product_PageView', {
      page_type: 'pdp',
      page_name: 'PDP',
      source_prodid: '39596296700022',
    },
    pageCorrelationId );
  };

  const track2 = () => {
    track('Buy', {
      page_type: 'oc',
      page_name: 'Order Confirmation',
      source_prodid: '39596296700022',
      price: [150.5],
      quantity: [2],
      product_id: ['39596296700022'],
    },
    pageCorrelationId);
  };

  const track3 = () => {
    track('rightSwipe', {
      page_type: 'pdp',
      page_name: 'PDP',
      source_prodid: '39596296700022',
      epoch: 100,
      slot_id: '1',
    },
    pageCorrelationId
    );
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <ButtonPrimary onPress={discover} buttonText={'Discover'} />
        <ButtonPrimary onPress={track1} buttonText={'Page View'} />
        <ButtonPrimary onPress={track2} buttonText={'Buy'} />
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
