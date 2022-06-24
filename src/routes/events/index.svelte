<script lang="ts">
    import PageHeader from "../../lib/components/page-header/PageHeader.svelte";
</script>

<svelte:head>
    <title>Events</title>
</svelte:head>

<PageHeader header="Events"/>

<section class="container pt-8 pb-8 lg:pt-16 lg:pb-16">
    <section class="container pt-4 pb-4 lg:pt-8 lg:pb-8">
        <div>
            <h2 class="text-3xl 2xl:text-4xl font-bold">Live Events</h2>
            <p class="mt-3">Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
        </div>

        <div class="grid grid-cols-4 gap-8 mt-5">
            <!--Card Component-->
            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-row">
                    <img alt="Bonnie image" class="mb-3 w-10 h-10 rounded-full shadow-lg"
                         src="/docs/images/people/profile-picture-3.jpg"/>
                    <span class="flex-1 ml-10 mt-2">NAME</span>
                </div>
                <div class="mt-3">
                    <a href="#">
                        <img alt="Bonnie image" class="mb-3 h-44 rounded-b shadow-lg"
                             src="/docs/images/people/profile-picture-3.jpg"/>
                    </a>
                    <p class="mb-3 font-light text-gray-700 dark:text-gray-400">Here are the biggest</p>
                    <p class="mb-3 font-bold text-primary-500 dark:text-gray-400">500 TL</p>
                    <a class="block text-center py-2 w-full font-light text-base-50 bg-primary-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                       href="#">
                        Go Event
                    </a>
                </div>
            </div>
            <!--Card Component Ends-->
            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-row">
                    <img alt="Bonnie image" class="mb-3 w-10 h-10 rounded-full shadow-lg"
                         src="/docs/images/people/profile-picture-3.jpg"/>
                    <span class="flex-1 ml-10 mt-2">NAME</span>
                </div>
                <div class="mt-3">
                    <a href="#">
                        <img alt="Bonnie image" class="mb-3 h-44 rounded-b shadow-lg"
                             src="/docs/images/people/profile-picture-3.jpg"/>
                    </a>
                    <p class="mb-3 font-light text-gray-700 dark:text-gray-400">Here are the biggest</p>
                    <p class="mb-3 font-bold text-primary-500 dark:text-gray-400">500 TL</p>
                    <a class="block text-center py-2 w-full font-light text-base-50 bg-primary-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                       href="#">
                        Go Event
                    </a>
                </div>
            </div>
            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-row">
                    <img alt="Bonnie image" class="mb-3 w-10 h-10 rounded-full shadow-lg"
                         src="/docs/images/people/profile-picture-3.jpg"/>
                    <span class="flex-1 ml-10 mt-2">NAME</span>
                </div>
                <div class="mt-3">
                    <a href="#">
                        <img alt="Bonnie image" class="mb-3 h-44 rounded-b shadow-lg"
                             src="/docs/images/people/profile-picture-3.jpg"/>
                    </a>
                    <p class="mb-3 font-light text-gray-700 dark:text-gray-400">Here are the biggest</p>
                    <p class="mb-3 font-bold text-primary-500 dark:text-gray-400">500 TL</p>
                    <a class="block text-center py-2 w-full font-light text-base-50 bg-primary-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                       href="#">
                        Go Event
                    </a>
                </div>
            </div>
            
            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-row">
                    <img alt="Bonnie image" class="mb-3 w-10 h-10 rounded-full shadow-lg"
                         src="/docs/images/people/profile-picture-3.jpg"/>
                    <span class="flex-1 ml-10 mt-2">NAME</span>
                </div>
                <div class="mt-3">
                    <a href="#">
                        <img alt="Bonnie image" class="mb-3 h-44 rounded-b shadow-lg"
                             src="/docs/images/people/profile-picture-3.jpg"/>
                    </a>
                    <p class="mb-3 font-light text-gray-700 dark:text-gray-400">Here are the biggest</p>
                    <p class="mb-3 font-bold text-primary-500 dark:text-gray-400">500 TL</p>
                    <a class="block text-center py-2 w-full font-light text-base-50 bg-primary-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                       href="#">
                        Go Event
                    </a>
                </div>
            </div>
        </div>
    </section>
    <footer class="flex justify-center mt-8">
        <a class="block text-center py-4 px-12 font-light text-primary-600 border border-primary-700 rounded-lg hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300"
           href="#">
            Load More
        </a>
    </footer>
</section>

<section class="container pt-8 pb-8">
    <section class="container pt-4 pb-4 lg:pt-16 lg:pb-16">
        <div>
            <h2 class="text-3xl 2xl:text-4xl font-bold">Past Events</h2>
            <p class="mt-3">Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
        </div>

        <div class="grid grid-cols-4 gap-8 mt-5">
            <!--Card Component-->
            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-row">
                    <img alt="Bonnie image" class="mb-3 w-10 h-10 rounded-full shadow-lg"
                         src="/docs/images/people/profile-picture-3.jpg"/>
                    <span class="flex-1 ml-10 mt-2">NAME</span>
                </div>
                <div class="mt-3">
                    <a href="#">
                        <img alt="Bonnie image" class="mb-3 h-44 rounded-b shadow-lg"
                             src="/docs/images/people/profile-picture-3.jpg"/>
                    </a>
                    <p class="mb-3 font-light text-gray-700 dark:text-gray-400">Here are the biggest</p>
                    <p class="mb-3 font-bold text-primary-500 dark:text-gray-400">500 TL</p>
                    <a class="block text-center py-2 w-full font-light text-base-50 bg-primary-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                       href="#">
                        Go Event
                    </a>
                </div>
            </div>
            <!--Card Component Ends-->
            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-row">
                    <img alt="Bonnie image" class="mb-3 w-10 h-10 rounded-full shadow-lg"
                         src="/docs/images/people/profile-picture-3.jpg"/>
                    <span class="flex-1 ml-10 mt-2">NAME</span>
                </div>
                <div class="mt-3">
                    <a href="#">
                        <img alt="Bonnie image" class="mb-3 h-44 rounded-b shadow-lg"
                             src="/docs/images/people/profile-picture-3.jpg"/>
                    </a>
                    <p class="mb-3 font-light text-gray-700 dark:text-gray-400">Here are the biggest</p>
                    <p class="mb-3 font-bold text-primary-500 dark:text-gray-400">500 TL</p>
                    <a class="block text-center py-2 w-full font-light text-base-50 bg-primary-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                       href="#">
                        Go Event
                    </a>
                </div>
            </div>
            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-row">
                    <img alt="Bonnie image" class="mb-3 w-10 h-10 rounded-full shadow-lg"
                         src="/docs/images/people/profile-picture-3.jpg"/>
                    <span class="flex-1 ml-10 mt-2">NAME</span>
                </div>
                <div class="mt-3">
                    <a href="#">
                        <img alt="Bonnie image" class="mb-3 h-44 rounded-b shadow-lg"
                             src="/docs/images/people/profile-picture-3.jpg"/>
                    </a>
                    <p class="mb-3 font-light text-gray-700 dark:text-gray-400">Here are the biggest</p>
                    <p class="mb-3 font-bold text-primary-500 dark:text-gray-400">500 TL</p>
                    <a class="block text-center py-2 w-full font-light text-base-50 bg-primary-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                       href="#">
                        Go Event
                    </a>
                </div>
            </div>
            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div class="flex flex-row">
                    <img alt="Bonnie image" class="mb-3 w-10 h-10 rounded-full shadow-lg"
                         src="/docs/images/people/profile-picture-3.jpg"/>
                    <span class="flex-1 ml-10 mt-2">NAME</span>
                </div>
                <div class="mt-3">
                    <a href="#">
                        <img alt="Bonnie image" class="mb-3 h-44 rounded-b shadow-lg"
                             src="/docs/images/people/profile-picture-3.jpg"/>
                    </a>
                    <p class="mb-3 font-light text-gray-700 dark:text-gray-400">Here are the biggest</p>
                    <p class="mb-3 font-bold text-primary-500 dark:text-gray-400">500 TL</p>
                    <a class="block text-center py-2 w-full font-light text-base-50 bg-primary-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300"
                       href="#">
                        Go Event
                    </a>
                </div>
            </div>
        </div>
    </section>
    <footer class="flex justify-center mt-8">
        <a class="block text-center py-4 px-12 font-light text-primary-600 border border-primary-700 rounded-lg hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300"
           href="#">
            Load More
        </a>
    </footer>
</section>

<style>

</style>
