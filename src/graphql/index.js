import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { AsyncStorage } from 'react-native';
import { authToken } from '../utils/constants';

let token;
const getToken = async () => 
{  if (token != null) {   return token;  }
   token = await AsyncStorage.getItem(authToken);  //it will be called only first time---then above if will be called all other times
   return token;
};

const cache = new InMemoryCache();
//const link = new HttpLink(
const httpLink = new createHttpLink(
{ // uri:'http://10.133.44.151:4000/api/graphql',
  uri: 'http://192.168.0.5:4000/api/graphql',
});

const authLink = setContext(async (_, { headers }) => 
{ await getToken(); //will waith for the top function
  return {  headers: {  ...headers,  authorization: token ? `Bearer ${token}` : null, },  };
});

export const client = new ApolloClient(
{ // link,  
     link: authLink.concat(httpLink), 
     cache, 
});
