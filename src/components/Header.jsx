export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-[#FFD700] font-bold text-4xl mr-4">JETEX</div>
          <div>
            <h1 className="text-2xl font-semibold">Gestion des vols</h1>
            <p className="text-[#FFD700] text-sm">Jetex Private Jet Experience</p>
          </div>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-[#FFD700] transition duration-300">Accueil</a></li>
            <li><a href="#" className="hover:text-[#FFD700] transition duration-300">À propos</a></li>
            <li><a href="#" className="hover:text-[#FFD700] transition duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

