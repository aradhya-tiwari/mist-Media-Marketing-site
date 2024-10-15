<script lang="ts">
    import { onMount } from "svelte";

    let subject = " ";
    onMount(() => {
        let rawURL = window.location.href;
        let url = new URL(rawURL);

        let sub = document.querySelector("#subject") as HTMLInputElement;
        sub.value = url.searchParams.get("for");
        subject = sub.value;
    });
</script>

<section class="bg-gray-900">
    <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2
            class="mb-4 mt-10 text-4xl tracking-tight font-extrabold text-center text-white"
        >
            Contact Us
        </h2>
        <p
            class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"
        >
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
        </p>
        <form action="mailto:" class="space-y-8">
            <div>
                <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-300"
                    >Your email</label
                >
                <input
                    type="email"
                    id="email"
                    class="shadow-sm border text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                    placeholder="Your Mail"
                    required
                />
            </div>
            <div>
                <label
                    for="subject"
                    class="block mb-2 text-sm font-medium text-gray-300"
                    >Subject</label
                >
                <input
                    type="text"
                    id="subject"
                    class="block p-3 w-full text-sm rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light"
                    required
                    placeholder="What can we Service you ??"
                    value={subject}
                />
            </div>
            <div class="sm:col-span-2">
                <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-400"
                    >Details</label
                >
                <textarea
                    id="message"
                    rows="6"
                    class="block p-2.5 w-full text-sm rounded-lg shadow-sm border focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                    placeholder="Explain us the project in breif"
                ></textarea>
            </div>

            <button
                type="submit"
                class="py-3 px-5 text-sm font-medium text-center text-bg rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                ><a href="mailto:tiwaary10@gmail.com" class="pt-5"
                    >Send message</a
                ></button
            >
        </form>
    </div>
</section>
