import React, { useState } from 'react';
import { DATA } from '../../data';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import Card from '../components/Card';
import { CardProps } from '../types';

const Feed: React.FC = () => {
  const [isLoading, setLoading] = useState(false)
  const [data, setData] = useState<CardProps[]>(DATA.slice(0, 10)) // load first 10 items // page 2
  const [page, setPage] = useState(3) // start at page 3
  const limit = 5;

  //imitate API call
  const fetchMoreData = async () => {
    try {
      setLoading(true)
      await delay(2000)
      setLoading(false)
      let nextArr = paginate(DATA, page, limit);
      setData([...data, ...nextArr])
      setPage(page+1)
    } catch (err) {
      throw new Error("error.unknown");
    }  
  };

  //imitate delay
  const delay= ms => new Promise(resolve => setTimeout(resolve, ms));

  //get the next 5 items
  const paginate = (arr, pageNumber, limit) => arr.slice((pageNumber - 1) * limit, pageNumber * limit);
  
  const renderHeader = () =>
    <Text style={styles.title}>List of Randomness</Text>

  const renderFooter = () =>
      <View style={styles.footer}>
          {isLoading && <ActivityIndicator />}
      </View>

  const renderEmpty = () =>
    <View style={styles.emptyText}>
        <Text>No Data at the moment</Text>
    </View>


  return (
    <SafeAreaView style={styles.container}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
              <Card title={item.title} image_url={item.image_url} />
          )}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          ListEmptyComponent={renderEmpty}
          onEndReachedThreshold={0.2}
          onEndReached={() => {
            fetchMoreData()
          }}
          showsVerticalScrollIndicator={false}
        />
</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    marginVertical: 15,
    marginHorizontal: 10
  },
  footer: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20
  },
  emptyText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Feed;