import Photo from '@/components/Photo';
import Social from '@/components/Social';
import { Button } from '@/components/ui/button'
import { FiDownload } from "react-icons/fi"

export default function Home() {
  return (
    <section className='h-full'>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className='text-xl'>Développeur Full-Stack</span>
            <h1 className='h2 mb-6'>
              salut, Je suis <br /> <span className='text-accent capitalize h1'>mahjoubi bilel</span>
            </h1>
            <p className='max-w-[500px] mb-9 text-white/80'>Web,Mobile,Front-end,Back-end,designer,je suis un développeur full-stack passionné par la technologie et le design.</p>
            {/* btn && social*/}
            <div className='flex flex-col xl:flex-row items-center gap 8'>
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2">
                <span>Télecharger CV</span>
                <FiDownload className='text-xl' />
              </Button>
              <div className='mb-8 mt-8 xl:mb-8 ml-8'>
                <Social containerStyles='flex gap-6'
                  iconStyles='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base
              hover:bg-accent hover:text-primary hover:transition-all duration-500'/>
              </div>
            </div>
          </div>
          {/* photo*/}
          <div className='order-1 ml-12 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
}
