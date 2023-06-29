<script>

</script>

<template>
    <header class="lg:px-16 px-6   flex flex-wrap items-center lg:py-0 py-2">
        <div class="flex-1 flex pt-3 justify-between items-center">
            <div class="flex flex-row">
            <a   href="#">
                <img class="h-16 md:h-24" src="images/pngwing.com.png  " alt="">
            </a>
            
            <a class="ml-2  hidden md:flex"  href="#">
                <img class="h-24"  src="images/logo-icaycc-o-color.png" alt="">
            </a>

            <a class="ml-2 sm:fle md:hidden " href="#">
                <img class="h-16"  src="images/LOGO_ICAYCC_color.png" alt="">
            </a>

        </div>
        </div>

        <label for="menu-toggle" class="pointer-cursor lg:hidden block"><svg class="fill-current text-gray-900"
                xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                <title>menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg></label>
        <input class="hidden" type="checkbox" id="menu-toggle" />

        <div class="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
            <nav>
                <ul class="lg:flex items-center justify-between text-base text-stone-200 bg-blue_ica-950  shadow-md pt-4 lg:pt-0">
                    <li><a class="lg:p-4 py-3 px-0 block border-2 border-transparent hover:bg-neutral-100 hover:text-blue_ica-950 font-semibold  "
                            href="#">Home</a></li>
                    <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:bg-neutral-100 hover:text-blue_ica-950 font-semibold "
                            href="#"> Historicos</a></li>
                    <li><a class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:bg-neutral-100 hover:text-blue_ica-950 font-semibold "
                            href="#">Documentación</a></li>
               
                </ul>
            </nav>


        </div>

</header></template>

