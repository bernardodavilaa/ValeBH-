import { Menu } from "pages";

export default function App() {
  return (
    <>
    <header>
      <div className="flex w-full justify-between items-center h-20 bg-gray-500">
        <button className="ml-5 py-1 px-5 bg-black text-white b-2 rounded-lg flex text-center">Home</button>
        <div className="flex">
          <button className="mr-5 py-1 px-5 bg-black text-white rounded-lg border-2 border-white">Login</button>
          <button className="mr-5 py-1 px-5 bg-black text-white b-2 rounded-lg">Cadastro</button>
          <button className="mr-5 py-1 px-5 bg-black text-white b-2 rounded-lg">Sobre Nós</button>
        </div>
      </div>
    </header>
    <Menu />
    
    </>
  )
}