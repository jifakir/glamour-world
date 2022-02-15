import Layout from '../components/Layouts/Layout';
import { Provider } from 'react-redux';
import {store} from '../store/store';
import { persistor } from '../store/store';
import { PersistGate } from 'redux-persist/integration/react';
import AuthProvider from '../components/AuthProvider';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';

import '../styles/globals.css';
import 'swiper/swiper-bundle.min.css';
import '../styles/customSwiper.css';

function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || (page => page);

  return (
    <ApolloProvider client={client} >
      <Provider store={store} >
        <AuthProvider session={pageProps.session} >
          <PersistGate persistor={persistor}>
              {getLayout(<Component {...pageProps} />)}
          </PersistGate>
        </AuthProvider>
      </Provider>
    </ApolloProvider>
  )
}

export default MyApp;
