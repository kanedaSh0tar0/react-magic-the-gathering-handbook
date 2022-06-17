import { Routes, Route } from 'react-router-dom'

import Layout from '../Layout/Layout'
import CardsPage from '../CardsPage/CardsPage'
import CardPage from '../CardPage/CardPage'
import HomePage from '../HomePage/HomePage'
import FavoritesPage from '../FavoritesPage/FavoritesPage'
import NotFound from '../NotFound/NotFound'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="cards/:id" element={<CardPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="favorites/:id" element={<CardPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
