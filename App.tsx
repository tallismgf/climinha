import { LogBox, StatusBar } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Home } from './src/screens'

const queryClient = new QueryClient()
LogBox.ignoreLogs(['Setting a timer'])

export default function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <StatusBar />
      <Home />
    </QueryClientProvider>
  );
}
