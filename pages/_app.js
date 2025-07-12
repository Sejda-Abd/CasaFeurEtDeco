import { AuthProvider } from './components/AuthContext'; // Adjust the path as needed

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
