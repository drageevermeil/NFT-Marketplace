import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import images from '../assets';
import Button from './Button';

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="flex flex-col py-8 bg-white border-t md:px-4 border-prim-gray-1 dark:bg-prim-dark dark:border-prim-black-1">
      <div className="flex flex-row justify-between md:flex-col">
        <div className="ml-32 md:ml-0">
          {/* ===================Brand=================== */}
          <div className="flex items-center justify-start md:ml-2">
            <Image
              src={images.logo}
              objectFit="contain"
              width={32}
              height={32}
              alt="logo"
            />

            <p className="ml-2 text-lg font-bold text-black dark:text-prim-gray-1">
              NFT
            </p>
          </div>

        
        </div>

       
      </div>

      {/* ===================Footer LowerSecTion=================== */}
      <div className="flex flex-row justify-between mt-3 border-t-2 tablet:mx-32 sm:flex-col dark:bg-prim-dark pt-7 dark:border-prim-black-3">
        <p className="flex font-semibold text-black sm:justify-center font-poppins text-md sm:text-xs dark:text-prim-gray-1 md:ml-10 sm:ml-0">
         NFt Narketplace diploma-work-demo
        </p>

        <div className="flex flex-row mr-10 sm:justify-center sm:mr-0 sm:mt-4">
          {[
            images.instagram,
            images.twitter,
            images.telegram,
            images.discord,
            images.facebook,
          ].map((image, index) => (
            <div key={index} className="mx-3 md:mx-2 hover:cursor-pointer">
              <Image
                src={image}
                objectFit="contain"
                width={25}
                height={25}
                alt="social"
                className={`${theme === 'light' && 'filter invert'}`}
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
