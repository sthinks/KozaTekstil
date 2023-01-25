import React from "react";
import "../header/header.css";
 import LogoKoza from "../../assets/header/KozaTekstil.png";
export default function header() {
    return (
        <>
            <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 navbar-full">
                <div class="container flex flex-wrap items-center justify-between mx-auto">
                    <a
                        href="#"
                        class="navbar-link block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                        aria-current="page"
                    >
                        About Us
                    </a>
                    <a
                        href="#"
                        class="navbar-link  block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                        aria-current="page"
                    >
                        Products
                    </a>
                    <a
                        href=" navbar-link"
                        class="flex items-center"
                    >
                        <img
                            src={LogoKoza}
                            class="h-6 mr-3 sm:h-9"
                            alt="Flowbite Logo"
                        />
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            KozaTekstil
                        </span>
                    </a>
                    <a
                        href="#"
                        class="navbar-link  block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                        aria-current="page"
                    >
                        Sustainability
                    </a>
                    <a
                        href="#"
                        class="navbar-link  block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                        aria-current="page"
                    >
                        Contact
                    </a>
                </div>
            </nav>
        </>
    );
}
