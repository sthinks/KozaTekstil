import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useEffect } from 'react'
import Logo from '../../assets/header/logo.png'

export default function Header() {
  const slug = window.location.pathname

  const navigation = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Products', href: '/products' },
    { name: 'Sustainability', href: '/sustainability' },
    { name: 'Contact', href: '/contact' },
  ]

  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 250 ? header.classList.add('md:bg-white') : header.classList.remove('md:bg-white');
  };

  return (
    <Disclosure
      as="nav"
      className={`${slug != '/'
        ? 'relative bg-white'
        : 'sm:bg-[#ffffff82] sm:fixed sm:top-0 z-50 w-full bg-[#004C96] header-section'
        }`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex sm:h-20 h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-2 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white ring-2 ring-inset ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon
                      className="block h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className="block h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center sm:items-stretch sm:justify-around text-[#191919] font-semibold w-full">
                <div className="hidden sm:ml-6 sm:block w-full">
                  <div className="flex justify-around items-center">
                    <a href="/about-us">About Us</a>
                    <a href="/products">Products</a>
                    <div className="flex flex-shrink-0 items-center">
                      <a href="/">
                        <img
                          className="block h-8 w-auto lg:hidden"
                          src={Logo}
                          alt="Your Company"
                        />
                      </a>
                      <a href="/">
                        <img
                          className="hidden h-8 w-auto lg:block"
                          src={Logo}
                          alt="Your Company"
                        />
                      </a>
                    </div>
                    <a href="/sustainability">Sustainability</a>
                    <a href="/contact">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-white font-medium"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className='block px-3 py-2'>
              <img
                className="block h-auto w-auto"
                src={Logo}
                alt="Your Company"
              />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
