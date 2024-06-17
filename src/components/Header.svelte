<script>
    import { onMount } from "svelte";
    let hamToggle = false;
    function toggleHam() {
        hamToggle = !hamToggle;
    }
    // let kk = $state(0);
    let sticky = false;
    onMount(function () {
        function ak() {
            if (window.scrollY > document.querySelector("#header").offsetTop) {
                sticky = true;
            } else sticky = false;
        }
        window.onscroll = function () {
            ak();
        };
    });
</script>

<header
    id="header"
    class="w-full h-[8vh] p-1 py-2 shadow-sm shadow-secondary text-white bg-bg/10 z-40 items-center justify-between md:px-5 bg-red flex"
    class:fixIt={sticky}
>
    <p class="logo w-auto mx-5 h-full">
        <img src="/logo_white.svg" alt="" srcset="" class="h-full" />
    </p>
    <ul
        class="md:w-[60%] h-screen md:h-full w-0 absolute justify-center md:static left-0 mt-[90vh] md:mt-0 text-center items-center bg-bg/90 backdrop:blur-lg md:bg-bg/10 overflow-hidden md:overflow-visible flex flex-col md:flex-row z-10 text-xl transition-all"
        class:w-[100%]={hamToggle}
    >
        <li class="m-10">
            <a href="/">Home</a>
        </li>

        <hr class="md:hidden bg-slate-800 w-3/4 text-center opacity-30" />
        <li class="m-10"><a href="/#about">About</a></li>
        <hr class="bg-slate-800 md:hidden w-3/4 text-center opacity-30" />
        <li class="m-10 relative" id="service">
            <a href="/services">Service </a>
            <div
                class="hidden gun rounded-lg p-2 h-auto w-max absolute bg-primary text-black"
            >
                <p class="p-2 border-b border-[#7d7d7d]">
                    <a href="/services/photography">Photography</a>
                </p>
                <p class="p-2 border-b border-[#7d7d7d]">
                    <a href="/services/digi-marketing">Digital Marketing</a>
                </p>
                <p class="p-2 border-b border-[#7d7d7d]">
                    <a href="/services/dev">Development</a>
                </p>
                <p class="p-2 border-b border-[#7d7d7d]">
                    <a href="/services/weddingshoot">Wedding Shoot</a>
                </p>
            </div>
        </li>
        <hr class="bg-slate-800 md:hidden w-3/4 text-center opacity-30" />
        <li class="m-10"><a href="/blogs">Blogs</a></li>
        <hr class="bg-slate-800 md:hidden w-3/4 text-center opacity-30" />
        <div
            class="mt-10 max-w-60 md:hidden text-xl text-black bg-primary px-4 py-4 rounded-full font-semibold"
        >
            Reach Out to Us
        </div>
    </ul>
    <div
        class="md:text-xl md:block hidden text-base text-black bg-primary px-4 py-20 rounded-full font-semibold"
    >
        <a href="/contact?for="> Reach Out to Us </a>
    </div>
    <i
        class="md:hidden mx-10 z-20 text-primary scale-150 cursor-pointer hover:scale-125"
        class:block={hamToggle}
        on:click={() => toggleHam(this)}
        ><img src="/Hamburger.svg" alt="" srcset="" /></i
    >
</header>

<style>
    li {
        /* margin: 15px; */
        font-family: "Syne", sans-serif;
    }
    .fixIt {
        background: rgba(0, 0, 0, 0.9);
        position: fixed;
    }
    .headerToggle {
        width: 100%;
        position: static;
    }
    #service:hover .gun {
        display: block;
    }
</style>
