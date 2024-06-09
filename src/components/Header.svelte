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
    class="w-full h-[8vh] p-1 py-2 shadow-sm absolute shadow-secondary text-white bg-bg/10 z-40 items-center justify-between md:px-5 bg-red flex"
    class:fixIt={sticky}
>
    <p class="logo w-auto mx-5 h-full">
        <img src="/logo_white.svg" alt="" srcset="" class="h-full" />
    </p>
    <ul
        class="md:w-[60%] h-screen md:h-full w-0 absolute justify-center md:static left-0 mt-[80vh] md:mt-0 text-center items-center bg-bg/90 backdrop:blur-lg md:bg-bg/10 overflow-hidden flex flex-col md:flex-row z-10 text-xl transition-all"
        class:w-[100%]={hamToggle}
    >
        <li class="m-10"><a href="/">Home</a></li>
        <hr class="md:hidden bg-slate-800 w-3/4 text-center opacity-30" />
        <li class="m-10"><a href="/#about">About</a></li>
        <hr class="bg-slate-800 md:hidden w-3/4 text-center opacity-30" />
        <li class="m-10"><a href="/services">Service</a></li>
        <hr class="bg-slate-800 md:hidden w-3/4 text-center opacity-30" />
        <li class="m-10"><a href="/contact">Contact Us</a></li>
        <hr class="bg-slate-800 md:hidden w-3/4 text-center opacity-30" />
        <div
            class="mt-10 max-w-60 md:hidden text-xl text-black bg-primary px-10 py-5 rounded-full font-semibold"
        >
            Reach Out to Us
        </div>
    </ul>
    <div
        class="md:text-xl md:block hidden text-lg text-black bg-primary px-4 py-2 rounded-full font-semibold"
    >
        Reach Out to Us
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
</style>
