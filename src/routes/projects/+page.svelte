<script lang="ts">
  import scahelper from "$lib/images/sca-helper.jpeg";
</script>

<svelte:head>
  <meta name="description" content="Some of my personal projects" />
</svelte:head>

<div>
  <a
    href="https://github.com/raxelo/sca-helper-extension"
    class="block border-4 border border-dashed rounded-lg p-4 text-gray-500 hover:scale-[1.02] hover:border-blue-400 hover:text-gray-600 transition-all duration-300 group relative"
    target="_blank"
    rel="noreferrer"
    title="Open project"
  >
    <span class="absolute right-0 top-0 mt-1 mr-2 uppercase text-xs text-transparent group-hover:text-gray-500 transition-all duration-300">click to open</span>

    <h4 class="text-3xl">SuiteCommerce Helper Extension</h4>
    <p class="mt-5">
      A Google Chrome extension that helps developers to work with SuiteCommerce
      sites.
    </p>

    <p class="text-center my-8">
      <img
        src={scahelper}
        alt="SCA Helper Extension"
        class="h-64 w-80 rounded-lg shadow mx-auto block object-cover"
      />
      <span class="mt-1 text-xs uppercase">the extension popup</span>
    </p>

    <ul class="list-disc pl-3 mt-5">
      <li>
        Provides a popup that displays information about the current page.
      </li>
      <li>
        Shows a list of local scripts that have been loaded, and their status.
      </li>
      <li>
        Has a button to switch between the live and local versions of the
        current page.
      </li>
    </ul>
  </a>
</div>
