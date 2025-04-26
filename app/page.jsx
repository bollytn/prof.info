// Project: portfolio
import Photo from '@/components/Photo';
import Social from '@/components/Social';
import { Button } from '@/components/ui/button';
import { FiDownload } from "react-icons/fi";
import Link from 'next/link';

import AnimatedBox from '@/components/shared/AnimatedBox';
import Counter from '@/components/shared/Counter';

export default function Home() {
  return (
    <section className='h-screen flex items-center justify-center'>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className=' text-xl font-semibold tracking-widest'>
              Enseignant En Informatique
            </span>
            <h1 className='h2 mb-4 xl:mt-6'>
              salut, Je suis <br /> <span className='text-accent capitalize h1'>mahjoubi bilel</span>
            </h1>
            <p className='max-w-[500px] mb-6 text-white/80'>Enseignant multidisciplinaires, professionnel dynamique et respecté, affichant une feuille de route exemplaire pour ce qui est de concevoir et d’offrir d’excellents plans de cours interactifs spécialement adaptés aux besoins de chaque élève.</p>


            {/* counter vistor website */}
            <div className='flex flex-col xl:flex-row gap-8 mb-4 xl:mb-0'>
              <div className='flex items-center justify-center gap-4'>
                <span className=' text-2xl font-semibold'>Visiteurs :</span>
                <Counter
                  containerStyles='flex items-center'
                  iconStyles='w-16 h-16 border border-accent rounded-full flex justify-center items-center text-accent text-2xl'
                />
              </div>
            </div>

            {/* btn && social */}
            <div className='flex flex-col xl:flex-row items-center gap 8'>
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
              <div className='ml-0 mt-8 xl:mb-8 xl:ml-8'>
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