'use client';
// Project: portfolio
import Photo from '@/components/Photo';
import Social from '@/components/Social';
import { Button } from '@/components/ui/button';
import { FiDownload } from "react-icons/fi";
import Link from 'next/link';

import AnimatedBox from '@/components/shared/AnimatedBox';
import HeroTitle from '@/components/HeroTitle';

import VisitorStats from '@/components/shared/VisitorStats';

import { useEffect } from 'react';
import '@/app/styles/globals.css';


export default function Home() {

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'PrintScreen') {
        navigator.clipboard.writeText('Screenshots are disabled!');
        alert('Screenshots are disabled on this site.');
        e.preventDefault(); // Empêche le comportement par défaut
      }
    };

    const handlePaste = (e) => {
      e.preventDefault();
      alert('Le collage de captures d’écran est désactivé !');
    };

    // Ajouter les écouteurs d'événements
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('paste', handlePaste);

    // Nettoyer les écouteurs d'événements lors du démontage
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('paste', handlePaste);
    };
  }, []);

  return (
    <section className='h-screen flex items-center justify-center '>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className=' text-xl font-semibold tracking-widest'>
              Enseignant En Informatique
            </span>
            <h1 className='h2 mb-2 xl:mt-6'>
              salut, Je suis <br /> <HeroTitle />
            </h1>
            <p className='max-w-[500px] mb-6 text-white/80'>Enseignant multidisciplinaires, professionnel dynamique et respecté, affichant une feuille de route exemplaire pour ce qui est de concevoir et d’offrir d’excellents plans de cours interactifs spécialement adaptés aux besoins de chaque élève.</p>

            {/* Statistiques des visiteurs */}
            <VisitorStats />

            {/* btn && social */}
            <div className='flex flex-col xl:flex-row items-center gap 8 mt-6 xl:mt-0'>
              <AnimatedBox>
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <Link href="/resume" className="flex items-center gap-2">
                    <span>Télecharger CV</span>
                    <FiDownload className="text-xl" />
                  </Link>
                </Button>
              </AnimatedBox>
              <div className='ml-0 mt-8 xl:mb-8 xl:ml-8 mb-8'>
                <Social containerStyles='flex gap-6'
                  iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base
              hover:bg-accent hover:text-primary hover:transition-all duration-500'/>
              </div>
            </div>
          </div>
          {/* photo */}
          <div className='order-1 mb-6 xl:order-none xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      {/* stats */}
    </section>
  );
}