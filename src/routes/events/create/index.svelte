<script lang="ts">
    import PageHeader from "../../../lib/components/page-header/PageHeader.svelte";

    let name;
    let event_date;
    let price;
    let event_url;
    let location;
    let event_type;

    const handleSubmit = () => {
        console.log(name, event_date, price, event_url, location, event_type)
    }
</script>

<svelte:head>
    <title>Create Event</title>
</svelte:head>

<PageHeader header="Create Event" secondaryHeader=""/>

<section class="container pt-8 pb-8 lg:pt-24 lg:pb-44">
    <div class="grid grid-flow-row-dense grid-rows-3 grid-cols-3 gap-8">
        <div class="row-span-3">01</div>
        <form on:submit|preventDefault={handleSubmit}>
            <div class="row-span-2">
                <div class="mb-8">
                    <label class="block mb-2 text-lg font-medium text-gray-900"
                           for="name">Name</label>
                    <input bind:value={name}
                           class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-6 py-3"
                           id="name"
                           type="text">
                </div>
                <div class="mb-8">
                    <label class="block mb-2 text-lg font-medium text-gray-900" for="event_date">
                        Event Date
                    </label>
                    <input bind:value={event_date}
                           class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-6 py-3"
                           id="event_date"
                           type="date">
                </div>

                <div class="">
                    <label class="block mb-2 text-lg font-medium text-gray-900"
                           for="price">Price</label>
                    <input bind:value={price}
                           class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-6 py-3"
                           id="price"
                           type="number">
                </div>
            </div>
            <div class="row-span-2">
                <div class="mb-8">
                    <label class="block mb-2 text-lg font-medium text-gray-900"
                           for="event_url">Url of Event</label>
                    <input bind:value={event_url}
                           class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-6 py-3"
                           id="event_url"
                           type="text"
                    >
                </div>
                <div class="mb-8">
                    <label class="block mb-2 text-lg font-medium text-gray-900"
                           for="location">Location</label>
                    <input bind:value={location}
                           class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-6 py-3"
                           id="location"
                           type="text">
                </div>
                <div class="">
                    <label class="block mb-2 text-lg font-medium text-gray-900" for="large">
                        Event Type
                    </label>
                    <select bind:value={event_type}
                            class="block py-3 px-4 w-full text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="large">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
            </div>
            <div class="col-span-2">
                <label class="block mb-2 text-lg font-medium text-gray-900" for="large-input">
                    Description
                </label>
                <input class="block p-6 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                       id="large-input"
                       type="text">
            </div>

            <button class="col-span-3 justify-self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-20 py-2.5 text-center">
                Create
            </button>
        </form>
    </div>

</section>

<style>
    form {
        display: contents;
    }
</style>
