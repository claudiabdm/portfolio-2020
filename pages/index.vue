<template>
  <div>
    <TheNavbar @refName="goTo" :sections="sections" />
    <main>
      <Home ref="home" @refName="goTo" />
      <About ref="about" />
      <Projects ref="projects" />
      <Contact ref="contact" />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TheNavbar from "@/components/TheNavbar.vue";
import About from "@/components/About.vue";
import Home from "@/components/Home.vue";
import Projects from "@/components/Projects.vue";
import Contact from "@/components/Contact.vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      sections: ["home", "about", "projects", "contact"]
    };
  },
  components: {
    TheNavbar,
    About,
    Home,
    Contact,
    Projects
  },
  methods: {
    goTo(refName: string) {
      const el: any = this.$refs[refName];
      const top = el.$el.offsetTop;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }
});
</script>

<style lang="scss">
.layout {
  position: relative;
}
</style>
