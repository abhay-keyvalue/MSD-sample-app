import React, { useMemo } from 'react';
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useRecommendations} from 'react-native-msd';

import ButtonPrimary from './buttonPrimary';

const RecommendationScreen = () => {
  const {
    recommendations,
    getRecommendationByStrategy,
    getRecommendationByModule,
    getRecommendationByPage,
  } = useRecommendations();

  const pageCorrelationId = '8504354e-3801-49a3-8200-5681e769fa67';
  const getRecommendationPage = () => {
    const requestParams = {
    "catalogs": {
        "3089e3d3ba": {
            "fields": [
                "title",
                "price",
                "image_link",
                "link"
            ],
            "context": {
                "variant_id": "39596296700022"
            }
        }
    }
    };
    getRecommendationByPage('PDP', requestParams, pageCorrelationId);
  };

  const getRecommendationModule = () => {
    const requestParams = {
      "catalogs": {
        "427e26dbfa": {
            "fields": [
                "title",
                "price",
                "image_link",
                "link"
            ],
            "context": {
                "variant_id": "39596296700022"
            }
        }
    }
    };
    getRecommendationByModule('Similar Products Module - 27 June', requestParams, pageCorrelationId);
  };

  const getRecommendationStrategy = () => {
    const requestParams = {
      "catalogs": {
        "427e26dbfa": {
            "fields": [
                "title",
                "price",
                "image_link",
                "link"
            ],
            "context": {
                "variant_id": "39596296700022"
            }
        }
    }
    };
    getRecommendationByStrategy('Similar Products - 27June', requestParams, pageCorrelationId);
  };

  const renderRecommendations = useMemo(() => {
    return (
      <ScrollView horizontal>
        {recommendations?.data?.length > 0 &&
          recommendations?.data[0].data?.map((item: any) => (
            <View key={item?.variant_id} style={styles.productCard}>
              <View>
                <Image
                  style={styles.productImage}
                  source={{uri: item.image_link}}
                />
              </View>
              <View>
                <Text numberOfLines={2} style={styles.productCardTitle}>
                  {item?.title}
                </Text>
                <Text style={styles.productPrice}>{`${item?.price}$`}</Text>
              </View>
            </View>
          ))}
      </ScrollView>
    );
  }, [recommendations]);

  const renderLoader = () => {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.backgroundStyle}>
      {recommendations.isLoading && renderLoader()}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
        <ButtonPrimary
          onPress={getRecommendationPage}
          buttonText={'Get getRecommendation by page'}
        />
        <ButtonPrimary
          onPress={getRecommendationModule}
          buttonText={'Get getRecommendation by module'}
        />
        <ButtonPrimary
          onPress={getRecommendationStrategy}
          buttonText={'Get getRecommendation by strategy'}
        />
        {renderRecommendations}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  productCard: {
    padding: 10,
    margin: 5,
    backgroundColor: '#D2E9E9',
    borderRadius: 5,
    width: 170,
  },
  productCardTitle: {
    color: '#545B77',
    fontWeight: '700',
    paddingTop: 8,
  },
  productPrice: {
    color: '#545B77',
    fontWeight: '400',
    paddingTop: 4,
  },
  productImage: {
    width: 150,
    height: 200,
    borderRadius: 3,
  },
  loaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

export default RecommendationScreen;
