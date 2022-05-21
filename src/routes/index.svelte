<script context="module" lang="ts">
	export const prerender = true;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="w-full flex flex-col items-center margin-auto bg-base-50">
	<!--SECTION-1-->
	<section class="container flex flex-row items-center pt-8 pb-8 lg:pt-24 lg:pb-44">
		<div class="flex-1">
			<h2 class="text-3xl 2xl:text-6xl font-bold">Open an Account</h2>
			<h2 class="mt-5 text-3xl 2xl:text-6xl font-bold"> Now and </h2>
			<h2 class="mt-5 text-primary-600 text-3xl 2xl:text-6xl font-bold">Start Earning!</h2>
			<p class="text-light mt-5">Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor<br/> Lorem ipsum dolor </p>
			<button type="button" class="mt-5 text-base-50 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-light rounded-md text-base px-5 py-2.5 text-center mr-3 md:mr-0">Create Event</button>

			<div class="flex gap-4">
			</div>
		</div>
		<div class="flex-1 hidden lg:block">
		</div>
	</section>

	<!--SECTION-2-->
	<section class="container flex flex-col pt-12 pb-12 lg:pb-24">
		<div>
			<h2 class="text-3xl 2xl:text4xl font-bold">How It Works</h2>
		</div>

		<div class="grid grid-cols-3 gap-24 mt-5">

			<div class="p-6 max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
				<a href="#">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
				</a>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
				<a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Read more
					<svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
				</a>
			</div>

			<div class="p-6 max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
				<a href="#">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
				</a>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
				<a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Read more
					<svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
				</a>
			</div>

			<div class="p-6 max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
				<a href="#">
					<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
				</a>
				<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
				<a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
					Read more
					<svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
				</a>
			</div>

		</div>
	</section>

	<!--SECTION-3-->
	<section class="container flex flex-col pt-12 pb-12 lg:pb-24">
		<div>
			<h2 class="text-3xl 2xl:text-4xl font-bold">Live Events</h2>
			<p class="mt-3">Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor</p>
		</div>

		<div class="grid grid-cols-4 gap-24 mt-5">

			<div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
				<div class="flex flex-row">
					<img class="mb-3 w-10 h-10 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
					<span class="flex-1 ml-10 mt-2">NAME</span>
				</div>
				<div class="mt-3">
					<a href="#">
						<img class="mb-3 h-44 rounded-b shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
					</a>
					<p class="mb-3 font-semibold text-gray-700 dark:text-gray-400">Here are the biggest</p>
					<p class="mb-3 font-bold text-primary-700 dark:text-gray-400">500 TL</p>
					<a href="#" class="block text-center py-2 w-full font-semibold text-base-50 bg-primary-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
						Go Event
					</a>
				</div>
			</div>

			<div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
				<div class="flex flex-row">
					<img class="mb-3 w-10 h-10 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
					<span class="flex-1 ml-10 mt-2">NAME</span>
				</div>
				<div class="mt-3">
					<a href="#">
						<img class="mb-3 h-44 rounded-b shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
					</a>
					<p class="mb-3 font-semibold text-gray-700 dark:text-gray-400">Here are the biggest</p>
					<p class="mb-3 font-bold text-primary-700 dark:text-gray-400">500 TL</p>
					<a href="#" class="block text-center py-2 w-full font-semibold text-base-50 bg-primary-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
						Go Event
					</a>
				</div>
			</div>

			<div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
				<div class="flex flex-row">
					<img class="mb-3 w-10 h-10 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
					<span class="flex-1 ml-10 mt-2">NAME</span>
				</div>
				<div class="mt-3">
					<a href="#">
						<img class="mb-3 h-44 rounded-b shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
					</a>
					<p class="mb-3 font-semibold text-gray-700 dark:text-gray-400">Here are the biggest</p>
					<p class="mb-3 font-bold text-primary-700 dark:text-gray-400">500 TL</p>
					<a href="#" class="block text-center py-2 w-full font-semibold text-base-50 bg-primary-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
						Go Event
					</a>
				</div>
			</div>

			<div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
				<div class="flex flex-row">
					<img class="mb-3 w-10 h-10 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
					<span class="flex-1 ml-10 mt-2">NAME</span>
				</div>
				<div class="mt-3">
					<a href="#">
						<img class="mb-3 h-44 rounded-b shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
					</a>
					<p class="mb-3 font-semibold text-gray-700 dark:text-gray-400">Here are the biggest</p>
					<p class="mb-3 font-bold text-primary-700 dark:text-gray-400">500 TL</p>
					<a href="#" class="block text-center py-2 w-full font-semibold text-base-50 bg-primary-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
						Go Event
					</a>
				</div>
			</div>

		</div>
	</section>

	<!--SECTION-4-->
	<section class="container flex flex-col pt-12 pb-12 lg:pb-24">
		<div>
			<h2 class="text-3xl 2xl:text3xl font-bold">Explore By Category</h2>
			<p class="mt-3">Find your category</p>
		</div>

		<div class="grid grid-cols-6 gap-10 mt-5">

			<a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center py-10">
				<svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
				<div class="text-left">
					<div class="mb-1 text-xs">Download on the</div>
					<div class="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
				</div>
			</a>
			<a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center py-10">
				<svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
				<div class="text-left">
					<div class="mb-1 text-xs">Download on the</div>
					<div class="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
				</div>
			</a>
			<a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center py-10">
				<svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
				<div class="text-left">
					<div class="mb-1 text-xs">Download on the</div>
					<div class="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
				</div>
			</a>
			<a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center py-10">
				<svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
				<div class="text-left">
					<div class="mb-1 text-xs">Download on the</div>
					<div class="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
				</div>
			</a>
			<a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center py-10">
				<svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
				<div class="text-left">
					<div class="mb-1 text-xs">Download on the</div>
					<div class="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
				</div>
			</a>
			<a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center py-10">
				<svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
				<div class="text-left">
					<div class="mb-1 text-xs">Download on the</div>
					<div class="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
				</div>
			</a>
		</div>
	</section>
</div>

<style>
</style>
