
interface NavbarProps {
    searchTerm: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}


const Navbar: React.FC<NavbarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <nav>
        <div className="inline-block p-4 mb-2 lg:flex lg:items-center lg:mb-8">
            <h1 className="mb-2 lg:mb-0 font-bold text-[18px]">Digimon Portal</h1>
            <input 
                placeholder="Buscar" 
                type="text"className="mb-2 rounded-full lg:mb-0 lg:ml-4 py-1 px-2 text-black"
                value={searchTerm}
                onChange={onSearchChange}
            />
        </div>
    </nav>
  )
}

export default Navbar