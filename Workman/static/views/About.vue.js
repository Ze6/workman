const aboutPage = Vue.component("AboutPage", {
  template: `<div lang="html">
    <template>
    <div>
      <AuthHeader />

      <div class="about m-5 border border-blue-500 p-10 rounded">
        
        <p class="text-lg text-gray-700"><span class="bg-purple-500 p-3 m-5 text-white font-semi-bold rounded">ZellaCore&reg;</span> Is Csware Construction Projects Management Platform Designed to be agile, portable and scaleable.</p>
        <div class="flex flex-col items-center border border-blue-600 max-w-6xl rounded mt-20">
          <p class="font-semibold text-2xl text-gray-700 text mt-20 "> Core Diagram</p>
        <img alt="appmap" src="http://192.168.0.17:19000/z3/static/images/zellamap.png" class="max-w-2xl p-2">
        </div>
      </div>
    </div>
    </template>
  </div>`,
  components: {
   
    AuthHeader
  }
});
