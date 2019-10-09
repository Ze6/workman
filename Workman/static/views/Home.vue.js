const homePage = Vue.component("HomePage", {
  template: `<div lang="html"><template><div class="home"><navreg /><Index msg="Welcome to Your Vue.js App"/></div></template></div>`,
  components: {
    Index,
    navreg 
  }
});