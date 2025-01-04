export default function FlightCard({ flight, onSelect }) {
  const imageUrl = 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg';

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 border border-gray-200">
      <img
        src={imageUrl}
        alt={`Vol ${flight.villeDepart} - ${flight.villeArrivee}`}
        className="w-full h-48 object-cover object-center"
      />
      <div className="bg-red-600 p-4">
        <div className="text-white text-center font-semibold text-lg">
          {flight.villeDepart} → {flight.villeArrivee}
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Prix :</span>
          <span className="text-2xl font-bold text-red-600">{flight.prix} DH</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Date :</span>
          <span className="font-semibold">{flight.date}</span>
        </div>
        <button
          onClick={() => onSelect(flight)}
          className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Réserver
        </button>
      </div>
    </div>
  )
}

