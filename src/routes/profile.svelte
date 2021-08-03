<script context="module">
  import { browser, dev } from "$app/env";
  import logo from "../lib/dog.jpg";

  // we don't need any JS on this page, though we'll load
  // it in dev so that we get hot module replacement...
  export const hydrate = dev;

  // ...but if the client-side router is already loaded
  // (i.e. we came here from elsewhere in the app), use it
  export const router = browser;

  // since there's no dynamic data here, we can prerender
  // it so that it gets served as a static asset in prod
  export const prerender = true;
</script>

<svelte:head>
  <title>Profile</title>
</svelte:head>

<h1 class="text-lg font-serif text-3xl mb-20">Welcome to User Profile</h1>

<div class="grid grid-cols-12 gap-4">
  <div class="col-span-12 md:col-span-5">
    <div class="rounded">
      <img class="object-contain h-80 w-full" src={logo} alt={"User Image"} />
    </div>
    <h1 class="font-serif text-2xl my-5">This is xyx</h1>
  </div>

  <div class="col-span-12 md:col-span-7 p-5 shadow-lg rounded">
    <p class="font-mono">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
    <p class="font-mono pt-5">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>

    <button
      class="mt-5 mr-20 float-right bg-transparent hover:bg-pink-400 text-pink-500 font-semibold hover:text-white py-2 px-4 border border-pink-400 hover:border-transparent rounded"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 inline"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
      Follow
    </button>
  </div>
</div>

<div class="grid grid-cols-12 gap-4 mt-20 pl-40">
  <div class="col-span-12 md:col-span-3">
    <h4 class="text-2xl text-gray-900">Activity shows here.</h4>
    <p>
      This is the bio, n book. It has survived not only five centuries, but also
      the leap into electronic typesetting, remainin
    </p>
  </div>
  <div class="col-span-9">
	<h2 class="text-3xl underline text-pink-900">User All Post's</h2>
	  <div class="col-span-12">
		<div class="m-5 p-4 shadow-md rounded-xl">
			<h3 class="text-2xl font-medium">This is the heading</h3>
			<p class="font-mono text-xl">
			  Lorem Ipsum is simply dummy text of the printing and typesetting
			  industry. Lorem Ipsum has been the industry's standard dummy text ever
			  since the ages, and more recently with desktop publishing software like
			  Aldus PageMaker including versions of Lorem Ipsum.
			</p>
	  
			<svg
			  xmlns="http://www.w3.org/2000/svg"
			  class="inline h-6 w-6 text-pink-500 cursor-pointer"
			  fill="none"
			  viewBox="0 0 24 24"
			  stroke="currentColor"
			>
			  <path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
			  />
			</svg>
			<p class="inline text-gray-500 text-xl cursor-pointer">10</p>
	  
			<p class="inline float-right mr-5 text-gray-500 text-xl">10 Nov, 2021</p>
		  </div>
	  </div>
	  <div class="col-span-12 ">
		<div class="m-5 p-4 shadow-md rounded-xl">
			<h3 class="text-2xl font-medium">This is the heading</h3>
			<p class="font-mono text-xl">
			  Lorem Ipsum is simply dummy text of the printing and typesetting
			  industry. Lorem Ipsum has been the industry's standard dummy text ever
			  since the ages, and more recently with desktop publishing software like
			  Aldus PageMaker including versions of Lorem Ipsum.
			</p>
	  
			<svg
			  xmlns="http://www.w3.org/2000/svg"
			  class="inline h-6 w-6 text-pink-500 cursor-pointer"
			  fill="none"
			  viewBox="0 0 24 24"
			  stroke="currentColor"
			>
			  <path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
			  />
			</svg>
			<p class="inline text-gray-500 text-xl cursor-pointer">10</p>
	  
			<p class="inline float-right mr-5 text-gray-500 text-xl">10 Nov, 2021</p>
		  </div>
	  </div>

	  <div class="col-span-12">
		<div class="m-5 p-4 shadow-md rounded-xl">
			<h3 class="text-2xl font-medium">This is the heading</h3>
			<p class="font-mono text-xl">
			  Lorem Ipsum is simply dummy text of the printing and typesetting
			  industry. Lorem Ipsum has been the industry's standard dummy text ever
			  since the ages, and more recently with desktop publishing software like
			  Aldus PageMaker including versions of Lorem Ipsum.
			</p>
	  
			<svg
			  xmlns="http://www.w3.org/2000/svg"
			  class="inline h-6 w-6 text-pink-500 cursor-pointer"
			  fill="none"
			  viewBox="0 0 24 24"
			  stroke="currentColor"
			>
			  <path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
			  />
			</svg>
			<p class="inline text-gray-500 text-xl cursor-pointer">10</p>
	  
			<p class="inline float-right mr-5 text-gray-500 text-xl">10 Nov, 2021</p>
		  </div>
	  </div>
    


  </div>
</div>


<style>
</style>
