'use client'

import { useDispatch, useSelector } from 'react-redux'
import { addService } from '../reducers/flightReducer'
import { useRef } from 'react'

export default function FlightDetails() {
  const dispatch = useDispatch()
  const { selectedFlight, services } = useSelector((state) => state.flights)
  const printRef = useRef()

  const handlePrint = () => {
    const printContent = document.getElementById('printable-content')
    const originalContents = document.body.innerHTML
    
    document.body.innerHTML = printContent.innerHTML
    
    window.print()
    
    document.body.innerHTML = originalContents
    window.location.reload()
  }

  if (!selectedFlight) {
    return <div className="border-l p-8 bg-gray-50">
      <p className="text-gray-500 text-center">Sélectionnez un vol pour voir les détails</p>
    </div>
  }

  const availableServices = [
    { id: 'baggage', name: 'Bagage supplémentaire', price: 30 },
    { id: 'wifi', name: 'Wi-fi à bord', price: 10 },
    { id: 'meal', name: 'Repas premium', price: 20 }
  ]

  const flightServices = services.filter(s => s.flightId === selectedFlight.id)
  const totalPrice = selectedFlight.prix + flightServices.reduce((sum, s) => sum + s.price, 0)

  return (
    <div className="border-l p-8 bg-gray-50">
      <div id="printable-content" ref={printRef} className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-red-600">JETEX</h1>
          <p className="text-sm text-gray-600">Jetex Private Jet Experience</p>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Détails du vol</h2>
        <div className="space-y-2 mb-6">
          <div className="flex justify-between"><span className="font-medium">Départ :</span> <span>{selectedFlight.villeDepart}</span></div>
          <div className="flex justify-between"><span className="font-medium">Arrivée :</span> <span>{selectedFlight.villeArrivee}</span></div>
          <div className="flex justify-between"><span className="font-medium">Prix :</span> <span>{selectedFlight.prix} DH</span></div>
          <div className="flex justify-between"><span className="font-medium">Date :</span> <span>{selectedFlight.date}</span></div>
        </div>

        <div className="mb-6 print:hidden">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">Services disponibles</h3>
          <div className="space-y-2">
            {availableServices.map((service) => (
              <div key={service.id} className="flex justify-between items-center">
                <span>
                  {service.name} - {service.price} DH
                </span>
                <button
                  onClick={() => dispatch(addService({ ...service, flightId: selectedFlight.id }))}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition duration-300"
                >
                  Ajouter
                </button>
              </div>
            ))}
          </div>
        </div>

        {flightServices.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Services sélectionnés</h3>
            <div className="space-y-2">
              {flightServices.map((service, index) => (
                <div key={index} className="flex justify-between">
                  <span>{service.name}</span>
                  <span>{service.price} DH</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="border-t pt-4">
          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{totalPrice} DH</span>
          </div>
        </div>
      </div>

      <button
        onClick={handlePrint}
        className="mt-6 w-full bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition duration-300 font-semibold focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 print:hidden"
      >
        Effectuer la Réservation
      </button>
    </div>
  )
}

