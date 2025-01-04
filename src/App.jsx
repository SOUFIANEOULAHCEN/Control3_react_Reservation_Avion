'use client'

import { Provider } from 'react-redux'
import { store } from './store/index.jsx'
import Header from './components/Header'
import SearchForm from './components/SearchForm'
import FlightList from './components/FlightList'
import FlightDetails from './components/FlightDetails'

export default function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <SearchForm />
          <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8">
            <FlightList />
            <FlightDetails />
          </div>
        </main>
        <footer className="bg-black text-white py-4 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2025 JETEX.By Soufiane Oulahcen</p>
          </div>
        </footer>
      </div>
    </Provider>
  )
}

