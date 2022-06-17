import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './containers/App/App'
import ThemeProvider from './context/ThemeProvider'
import store from './store/store'

import './styles/index.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </Provider>
)
