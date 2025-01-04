'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFlights, selectFlight } from '../reducers/flightReducer'
import FlightCard from './FlightCard'

export default function FlightList() {
  const dispatch = useDispatch()
  const { flights, status, error } = useSelector((state) => state.flights)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFlights())
    }
  }, [dispatch, status])

  if (status === 'loading') {
    return <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  }

  if (status === 'failed') {
    return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Erreur!</strong>
      <span className="block sm:inline"> {error}</span>
    </div>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {flights.map((flight) => (
        <FlightCard
          key={flight.id}
          flight={flight}
          onSelect={(flight) => dispatch(selectFlight(flight))}
        />
      ))}
    </div>
  )
}

