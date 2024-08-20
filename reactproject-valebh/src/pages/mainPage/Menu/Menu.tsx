export function Menu() {
    return (
      <nav className="h-96 w-48 mt-24 ml-14 bg-gray-500">
        <div className="grid grid-cols-1">
          <button className="border-b-2 border-white h-12 flex items-center justify-center">
            Perto de Você
          </button>
          <button className="border-b-2 border-white h-12 flex items-center justify-center">
            Localize
          </button>
          <button className="border-b-2 border-white h-12 flex items-center justify-center">
            Routinizer
          </button>
        </div>
      </nav>
    );
  }
  