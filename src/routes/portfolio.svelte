<script>
    import Modal, {bind} from 'svelte-simple-modal';
    import Dialog from "../lib/components/dialog/Dialog.svelte";
    import {writable} from "svelte/store";

    const modal = writable(null);

    const showDialog = () => modal.set(bind(Dialog, {
        header: "Edit Profile",
        hasForm: true,
        imageArea: true,
        formAreas: [
            {
                name: 'Name',
                type: 'text',
                value: ''
            },
            {
                name: 'User Name',
                type: 'text',
                value: ''
            },
            {
                name: 'Email',
                type: 'text',
                value: ''
            }
        ]
    }));
</script>

<Modal show={$modal}>
</Modal>

<section class="container pt-8 pb-8 lg:pt-16 lg:pb-16">
    <div class="w-full rounded-lg border shadow-md">
        <img alt="graffiti_img" class="object-cover w-full h-32" src="images/graffiti-3.jpeg">
        <div class="flex flex-row p-5 gap-1 rounded-lg">
            <div class="basis-1/4">
                <img alt=""
                     class="ml-3 -mt-12 object-cover w-full h-auto rounded-lg md:w-48 border-2 border-base-50 border-solid"
                     src="images/4.jpeg">
            </div>
            <div class="basis-3/4">
                <div class="flex flex-col">
                    <div class="font-bold text-3xl">JohnDoe</div>
                    <div class="mt-1 font-semibold text-xl">John Doe</div>
                </div>
            </div>
            <div class="basis-1/4 grid grid-rows-3">
                <div class="flex flex-wrap justify-end mr-3">
                    <a class="mr-5" href="#!">
                        <svg class="h-6 w-6" height="14.72" viewBox="0 0 16.921 14.72" width="16.921"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="twitter" transform="translate(-0.001 -33.299)">
                                <g data-name="Group 21" id="Group_21" transform="translate(0.001 33.299)">
                                    <path d="M16.847,35.819a.5.5,0,0,0-.474-.238l-.844.074.806-1.626a.5.5,0,0,0-.674-.677L13.528,34.4a3.606,3.606,0,0,0-4.1.543,4.366,4.366,0,0,0-1.351,3.509,7.347,7.347,0,0,1-5.8-3.951.5.5,0,0,0-.849-.06,3.462,3.462,0,0,0-.22,3.629c-.166-.042-.342-.1-.538-.164a.5.5,0,0,0-.658.561,4.244,4.244,0,0,0,2.41,3.21,4.239,4.239,0,0,1-.53.147.5.5,0,0,0-.266.839,6.834,6.834,0,0,0,3.324,1.769,5.707,5.707,0,0,1-4.076.961.5.5,0,0,0-.391.843c.731.805,3.393,1.713,6.191,1.782q.166,0,.339,0a8.969,8.969,0,0,0,6.425-2.285,9.092,9.092,0,0,0,2.623-4.827,9.386,9.386,0,0,0,.017-3.164c-.006-.041-.012-.084-.017-.122l.789-1.272A.5.5,0,0,0,16.847,35.819Z"
                                          data-name="Path 62"
                                          fill="#0172ff"
                                          id="Path_62" transform="translate(-0.001 -33.299)"/>
                                </g>
                            </g>
                        </svg>
                    </a>

                    <a class="" href="#!">
                        <svg class="h-6 w-6" height="14.72" viewBox="0 0 14.717 14.72" width="14.717"
                             xmlns="http://www.w3.org/2000/svg">
                            <g id="instagram" transform="translate(-0.449)">
                                <path d="M15.128,4.328a5.379,5.379,0,0,0-.342-1.786A3.771,3.771,0,0,0,12.632.388,5.392,5.392,0,0,0,10.846.046C10.058.009,9.808,0,7.81,0S5.561.009,4.776.043A5.38,5.38,0,0,0,2.991.385a3.591,3.591,0,0,0-1.306.851,3.624,3.624,0,0,0-.848,1.3A5.393,5.393,0,0,0,.495,4.325C.457,5.113.449,5.363.449,7.361S.457,9.61.492,10.4a5.378,5.378,0,0,0,.342,1.786,3.77,3.77,0,0,0,2.154,2.154,5.393,5.393,0,0,0,1.786.342c.785.035,1.035.043,3.034.043s2.249-.009,3.034-.043a5.377,5.377,0,0,0,1.786-.342,3.765,3.765,0,0,0,2.154-2.154,5.4,5.4,0,0,0,.342-1.786c.034-.785.043-1.035.043-3.034s0-2.249-.037-3.034ZM13.8,10.337a4.035,4.035,0,0,1-.253,1.366,2.442,2.442,0,0,1-1.4,1.4,4.049,4.049,0,0,1-1.366.253c-.776.035-1.009.043-2.973.043s-2.2-.009-2.973-.043A4.033,4.033,0,0,1,3.474,13.1a2.265,2.265,0,0,1-.845-.549,2.288,2.288,0,0,1-.549-.845,4.05,4.05,0,0,1-.253-1.366c-.035-.776-.043-1.009-.043-2.973s.009-2.2.043-2.973a4.032,4.032,0,0,1,.253-1.366,2.237,2.237,0,0,1,.552-.845,2.285,2.285,0,0,1,.845-.549A4.052,4.052,0,0,1,4.842,1.38c.776-.034,1.009-.043,2.973-.043s2.2.009,2.973.043a4.035,4.035,0,0,1,1.366.253A2.263,2.263,0,0,1,13,2.183a2.288,2.288,0,0,1,.549.845A4.051,4.051,0,0,1,13.8,4.394c.034.776.043,1.009.043,2.973s-.009,2.194-.043,2.97Zm0,0"
                                      data-name="Path 63"
                                      fill="#0172ff"
                                      id="Path_63" transform="translate(0 0)"/>
                                <path d="M128.73,124.5a3.781,3.781,0,1,0,3.781,3.781A3.782,3.782,0,0,0,128.73,124.5Zm0,6.234a2.453,2.453,0,1,1,2.453-2.453A2.453,2.453,0,0,1,128.73,130.734Zm0,0"
                                      data-name="Path 64"
                                      fill="#0172ff"
                                      id="Path_64" transform="translate(-120.92 -120.92)"/>
                                <path d="M364.215,89.485a.883.883,0,1,1-.883-.883A.883.883,0,0,1,364.215,89.485Zm0,0"
                                      data-name="Path 65"
                                      fill="#0172ff"
                                      id="Path_65" transform="translate(-351.592 -86.054)"/>
                            </g>
                        </svg>
                    </a>
                </div>
                <div class="justify-self-end row-start-3 mr-3">
                    <Modal>
                        <button class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded-md text-base px-5 py-2.5 text-center mr-3 md:mr-0"
                                on:click={showDialog} type="button">
                            Edit Profile
                        </button>
                    </Modal>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="container pt-4 pb-4 lg:pt-8 lg:pb-8">
    <div>
        <h2 class="text-3xl 2xl:text-4xl font-bold">Live Events</h2>
        <p class="mt-3">Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
    </div>

    <div class="grid grid-cols-4 gap-8 mt-5">

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
                <p class="mb-3 font-semibold text-gray-700 dark:text-gray-400">Here are the biggest</p>
                <p class="mb-3 font-bold text-primary-700 dark:text-gray-400">500 TL</p>
                <a class="block text-center py-2 w-full font-semibold text-base-50 bg-primary-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
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
                <p class="mb-3 font-semibold text-gray-700 dark:text-gray-400">Here are the biggest</p>
                <p class="mb-3 font-bold text-primary-700 dark:text-gray-400">500 TL</p>
                <a class="block text-center py-2 w-full font-semibold text-base-50 bg-primary-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
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
                <p class="mb-3 font-semibold text-gray-700 dark:text-gray-400">Here are the biggest</p>
                <p class="mb-3 font-bold text-primary-700 dark:text-gray-400">500 TL</p>
                <a class="block text-center py-2 w-full font-semibold text-base-50 bg-primary-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
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
                <p class="mb-3 font-semibold text-gray-700 dark:text-gray-400">Here are the biggest</p>
                <p class="mb-3 font-bold text-primary-700 dark:text-gray-400">500 TL</p>
                <a class="block text-center py-2 w-full font-semibold text-base-50 bg-primary-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                   href="#">
                    Go Event
                </a>
            </div>
        </div>
    </div>
</section>

<style></style>
