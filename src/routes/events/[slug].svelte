<script lang="ts">
</script>

<svelte:head>
    <title>Event Name</title>
</svelte:head>

<main class="container pt-8 pb-8 lg:pt-16 lg:pb-16 flex flex-wrap">
    <section class="w-1/2 text-center">
        1
    </section>
    <section class="w-1/2">
        <!--Event Name-->
        <h3 class="font-medium text-4xl">Event Name</h3>
        <!--Event Actions-->
        <div class="flex flex-row gap-6 mt-6">
            <div class="text-center py-1.5 px-8 font-light text-primary-600 border border-primary-700 rounded-lg hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Event Date
            </div>
            <div class="text-center py-1.5 px-8 font-light text-primary-600 border border-primary-700 rounded-lg hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Event Attendance
            </div>
            <div class="text-center py-1.5 px-8 font-light text-primary-600 border border-primary-700 rounded-lg hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Event Likes
            </div>
        </div>
        <!--Event Description-->
        <div class="flex flex-col mt-6">
            <h3 class="font-medium text-base">Description</h3>
            <p class="mt-5 font-extralight">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <!--Event Created By And Event Price-->
        <div class="flex flex-row mt-6 justify-between">
            <div class="w-1/2 flex flex-row">
                <img alt=""
                     class="object-cover w-2/12 rounded-lg md:w-2/12 border-2 border-base-50 border-solid"
                     src="/images/4.jpeg"/>
                <div class="flex flex-col font-light ml-5 justify-between">
                    <span class="">Created By</span>
                    <span class="font-medium">Creator Name</span>
                </div>
            </div>
            <div class="w-1/2 flex flex-col justify-between items-end">
                <h3 class="font-light text-base">Event Price</h3>
                <p class="text-2xl">405<span class="ml-2">TL</span></p>
            </div>
        </div>
        <!--Event Location-->
        <div class="flex flex-col mt-6">
            <h3 class="font-medium text-base">Location</h3>
            <p class="mt-5 font-extralight">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <!--Event Action Buttons-->
        <div class="flex flex-row mt-10 gap-10">
            <button class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded-md text-base px-12 py-2.5 text-center mr-3 md:mr-0"
                    type="button">
                Add To Favorite
            </button>
            <button class="text-center py-2.5 px-12 font-light text-primary-600 border border-primary-700 rounded-lg hover:bg-blue-100 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Be Attendance
            </button>
        </div>
        <!--Event Attendance List-->
        <div class="flex flex-col mt-12">
            <div class="h-5 border-b-2 border-primary-400 text-2xl text-center">
                <span class="bg-white px-5 text-xl font-light">Attendance List</span>
            </div>
            <div class="flex flex-row gap-10 mt-10">
                <div class="w-1/4 flex flex-row">
                    <img alt=""
                         class="object-cover w-4/12 rounded-lg md:w-4/12 border-2 border-base-50 border-solid"
                         src="/images/4.jpeg"/>
                    <div class="font-light ml-3 self-center">
                        <span class="">Created By</span>
                    </div>
                </div>
                <div class="w-1/4 flex flex-row">
                    <img alt=""
                         class="object-cover w-4/12 rounded-lg md:w-4/12 border-2 border-base-50 border-solid"
                         src="/images/4.jpeg"/>
                    <div class="font-light ml-3 self-center">
                        <span class="">Created By</span>
                    </div>
                </div>
                <div class="w-1/4 flex flex-row">
                    <img alt=""
                         class="object-cover w-4/12 rounded-lg md:w-4/12 border-2 border-base-50 border-solid"
                         src="/images/4.jpeg"/>
                    <div class="font-light ml-3 self-center">
                        <span class="">Created By</span>
                    </div>
                </div>
                <div class="w-1/4 flex flex-row">
                    <img alt=""
                         class="object-cover w-4/12 rounded-lg md:w-4/12 border-2 border-base-50 border-solid"
                         src="/images/4.jpeg"/>
                    <div class="font-light ml-3 self-center">
                        <span class="">Created By</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>


<style>
</style>
