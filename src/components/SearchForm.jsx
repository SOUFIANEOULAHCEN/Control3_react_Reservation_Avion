'use client'

import { useDispatch, useSelector } from 'react-redux'
import { setDateRange, fetchFlights } from '../reducers/flightReducer'

export default function SearchForm() {
  const dispatch = useDispatch()
  const { dateRange } = useSelector((state) => state.flights)

  const handleSearch = (e) => {
    e.preventDefault()
    dispatch(fetchFlights(dateRange))
  }

  return (
    <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden my-8">
      <h2 className="text-xl font-semibold p-4 bg-blue-600 text-white">Recherche de vols</h2>
      <form onSubmit={handleSearch} className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date de début :</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={dateRange.start}
            onChange={(e) =>
              dispatch(setDateRange({ ...dateRange, start: e.target.value }))
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Date de fin :</label>
          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={dateRange.end}
            onChange={(e) =>
              dispatch(setDateRange({ ...dateRange, end: e.target.value }))
            }
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-yellow-400 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            Rechercher
          </button>
        </div>
      </form>
    </div>
  )
}

