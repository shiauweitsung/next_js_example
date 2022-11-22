import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import { wrapper } from '../store/store'
import { Provider } from 'react-redux';

function App({ Component, pageProps, ...props }: AppProps) {
  const { store } = wrapper.useWrappedStore(props);

  return <Provider store={store}>
    <Header />
    <Component {...pageProps} />
  </Provider>
}

// export default wrapper.withRedux(App);
// export default wrapper.useWrappedStore(App);
export default App;
