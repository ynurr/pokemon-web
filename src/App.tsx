import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes'
import GlobalStyle from './styles/GlobalStyle'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
    
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <GlobalStyle />
                <AppRoutes />
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
