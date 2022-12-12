import Image from 'next/image';
import { useTheme } from 'next-themes';
import Link from 'next/link';

import images from '../assets';
import Button from './Button';

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="flex flex-col py-8 bg-white border-t md:px-4 border-prim-gray-1 dark:bg-prim-dark dark:border-prim-black-1">
      {/* ===================Footer UpperSecTion=================== */}
      <div className="flex flex-row justify-between md:flex-col">
        {/* ===================Left Column=================== */}
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

        {/* ===================Right Column=================== */}
        {/* <div className="flex justify-between md:flex-row md:mt-8">
          <div className="text-sm dark:text-prim-gray-1 mr-36 laptop:mr-60 md:mr-0 md:ml-20 sm:ml-5">
            <div className="text-black sm:mx-4 dark:text-prim-gray-1">
              <h3 className="mb-6 text-lg font-semibold font-poppins ">
                frUIT
              </h3>
              <Link href={'/'}>
                <p className="footer-link">Explore</p>
              </Link>
              <a href="https://github.com/lhphat02/IE104_frUIT">
                <p className="footer-link">How its work</p>
              </a>
              <a href="https://us18.list-manage.com/contact-form?u=1713bdfdd6cff262d36cd4f15&form_id=68cf768a10ebb33ba3c222070887a47d">
                <p className="footer-link">Contact Us</p>
              </a>
            </div>
          </div>
         
        </div> */}
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
