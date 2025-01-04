

export default function FlightCard({ flight, onSelect }) {
  const imageUrl = 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg';
  // const imageUrl = 'https://images.unsplash.com/photo-1581291519195-ef11498d1cf5';

  return (
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 transform-gpu">
          {/* Image dynamique */}
          <img
              src={imageUrl}
              alt={`Vol ${flight.villeDepart} - ${flight.villeArrivee}`}
              className="w-full h-48 object-cover object-center"
          />
          {/* Corps de la carte */}
          <div className="p-6 space-y-4">
              {/* Titre du vol */}
              {/* <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800">
                      {flight.villeDepart} → {flight.villeArrivee}
                  </h3>
              </div> */}
              {/* Prix */}
              <div className="flex justify-between items-center">
                  <span className="text-gray-600">Prix :</span>
                  <span className="text-2xl font-bold text-blue-600">{flight.prix} DH</span>
              </div>
              {/* Date */}
              <div className="flex justify-between items-center">
                  <span className="text-gray-600">Date :</span>
                  <span className="font-semibold">{flight.date}</span>
              </div>
              {/* Bouton de réservation */}
              <button
                  onClick={() => onSelect(flight)}
                  className="w-full bg-yellow-400 text-gray-800 font-semibold py-2 px-4 rounded-md hover:bg-yellow-500 transition duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
              >
                  Réserver
              </button>
          </div>
      </div>
  );
}

