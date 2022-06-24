<script>
    import {getContext} from 'svelte';

    export let header;
    export let hasForm = false;
    export let imageArea = false;
    export let formAreas = [];
    export let onCancel = () => {
    };
    export let onOkay = () => {
    };

    const {close} = getContext('simple-modal');

    let value;
    let onChange = () => {
    };

    function _onCancel() {
        onCancel();
        close();
    }

    function _onOkay() {
        onOkay(value);
        close();
    }

    $: onChange(value)
</script>

<style>
    h2 {
        font-size: 2rem;
        text-align: center;
    }

    input {
        width: 100%;
    }
</style>

<h2>{header}</h2>

<div class="container gap-8 pb-8 pb-8 flex flex-row">
    {#if imageArea}
        <div>
            <img alt="graffiti_img" class="object-cover w-full h-32" src="images/graffiti-3.jpeg">
        </div>
    {/if}
    {#if hasForm}
        <div>
            {#each formAreas as formArea}
                <div class="mb-8">
                    <label class="block mb-2 text-sm font-medium text-gray-900"
                           for={formArea.name}>{formArea.name}</label>
                    <input bind:value={formArea.value}
                           on:keydown={e => e.which === 13 && _onOkay()}
                           class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-6 py-3"
                           id={formArea.name}
                           type="text">
                </div>
            {/each}
        </div>
    {/if}
</div>

<div class="mt-10 flex flex-row justify-evenly">
    <button class="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded-md text-base px-5 py-2.5 text-center mr-3 md:mr-0"
            on:click={_onCancel} type="button">
        Close
    </button>
    <button class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded-md text-base px-5 py-2.5 text-center mr-3 md:mr-0"
            on:click={_onOkay} type="button">
        Save
    </button>
</div>