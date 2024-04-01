"use client"
import { Digimon, DigimonCard } from "@/components/DigimonCard";
import Navbar from "@/components/Navbar";
import { fetchDigimon } from "@/utils/api";
import { useEffect, useState } from "react";



export default function Home() {

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDigimonList, setFilteredDigimonList] = useState<Digimon[]>([]);
  const [initialDigimonList, setInitialDigimonList] = useState<Digimon[]>([]);


  useEffect(() => {
    async function fetchInitialDigimonList() {
      try {
        const data = await fetchDigimon();
        setInitialDigimonList(data);
        setFilteredDigimonList(data);
      } catch (error) {
        console.error('Error fetching digimon:', error);
      }
    }

    fetchInitialDigimonList();
  }, []);


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    filterDigimonList(term);
  };

  const filterDigimonList = (term: string) => {
    const filteredList = initialDigimonList.filter(digimon =>
      digimon.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredDigimonList(filteredList);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <Navbar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <DigimonCard digimonList={filteredDigimonList} />
    </main>
  );
}
