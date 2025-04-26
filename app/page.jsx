// Project: portfolio
import Photo from '@/components/Photo';
import Social from '@/components/Social';
import { Button } from '@/components/ui/button';
import { FiDownload } from "react-icons/fi";
import Link from 'next/link';

import AnimatedBox from '@/components/shared/AnimatedBox';
import Counter from '@/components/shared/Counter';

import VisitorStats from '@/components/shared/VisitorStats';

export default function Home() {
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Texte principal */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className='text-xl font-semibold tracking-widest'>
              Enseignant En Informatique
            </span>
            <h1 className='h2 mb-4 xl:mt-6'>
              salut, Je suis <br /> <span className='text-accent capitalize h1'>mahjoubi bilel</span>
            </h1>
            <p className='max-w-[500px] mb-6 text-white/80'>
              Enseignant multidisciplinaires, professionnel dynamique et respecté, affichant une feuille de route exemplaire pour ce qui est de concevoir et d’offrir d’excellents plans de cours interactifs spécialement adaptés aux besoins de chaque élève.
            </p>

            {/* Statistiques des visiteurs */}
            <VisitorStats />
          </div>

          {/* Photo */}
          <div className='order-1 mb-6 xl:order-none xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}