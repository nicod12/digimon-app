"use client"
import { useEffect, useState } from "react"
import { SpinnerDotted } from 'spinners-react';

export interface Digimon {
  name: string;
  img: string;
  level: string;
}

interface DigimonCardProps {
  digimonList: Digimon[]; 
}



export const DigimonCard: React.FC<DigimonCardProps> = ({ digimonList }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {

      } catch (error) {
        console.error('Error fetching digimon:', error);
        setError('Error fetching digimon. Please try again.')
      } finally {
        setLoading(false);
      }
    };

    fetchData();

  }, []);

  return (
    <div className="md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 lg:gap-11">
    {loading ? (
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
        <SpinnerDotted />
      </div>
    ) : error ? ( 
    <div className="text-red-500">{error}</div>
    ) : (
      digimonList.map((digimon, index) => (
        <div key={index} className="max-w-sm mb-4 bg-white border border-gray-200 rounded-lg shadow relative dark:bg-gray-800 dark:border-gray-700 cursor-pointer lg:hover:scale-105 transition duration-300">
          <div className="background"></div>
          <h5 className="mb-2 ml-2 p-2 text-2xl relative z-10 font-bold tracking-tight text-gray-900 dark:text-white">{digimon.name}</h5>
          <img className="rounded-[60px] p-6 relative z-10" src={digimon.img}  alt={digimon.name} />
          <p className="mb-3 ml-2 p-2 font-normal relative z-10 text-gray-700 dark:text-gray-400">{digimon.level}</p>
        </div>
      ))
    )}
  </div>
  );
};





