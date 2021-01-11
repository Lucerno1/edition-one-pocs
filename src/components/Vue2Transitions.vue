<template>
  <div>
    <h1>{{ title }}</h1>

    <!-- Collapse Transition -->
    <b-container class="vh-100">
      <b-row class="h-100">
        <b-col class="col-6 text-left" align-self="center">
          <div>
            <h6><b>Our spaces</b></h6>
            <h1>
              —Not fancying the algorithm idea? Sure. Drop by at our spaces to
              get fitted.
            </h1>
            <p class="mt-5">
              Our spaces can be found on private locations in London and
              Singapore. And are only accessible via appointment.
            </p>
            <b-button class="mt-3" @click="collapse = !collapse" variant="light"
              >Collapse</b-button
            >
          </div>
        </b-col>
        <b-col class="col-6">
          <div class="h-25"></div>
          <CollapseTransition :duration="800">
            <div v-show="collapse">
              <b-img
                src="https://picsum.photos/1000/1000"
                fluid
                alt="Responsive image"
              ></b-img>
            </div>
          </CollapseTransition>
        </b-col>
      </b-row>
    </b-container>

    <!-- Fade in -->
    <b-container class="vh-100">
      <b-row class="h-100" align-v="center">
        <b-col class="col-6 text-left">
          <div>
            <h6>
              <b>Our spaces</b>
            </h6>

            <h1>
              —Not fancying the algorithm idea? Sure. Drop by at our spaces to
              get fitted.
            </h1>

            <p class="mt-5">
              Our spaces can be found on private locations in London and
              Singapore. And are only accessible via appointment.
            </p>

            <b-button class="mt-3" @click="fade = !fade" variant="light"
              >Fade Top</b-button
            >
          </div>
        </b-col>
        <b-col class="col-6">
          <SlideYUpTransition :duration="800" :delay="300">
            <div v-show="fade">
              <b-img
                src="https://picsum.photos/1000/1000"
                fluid
                alt="Responsive image"
              ></b-img>
            </div>
          </SlideYUpTransition>
        </b-col>
      </b-row>
    </b-container>

    <div v-observe-visibility="visibilityChanged">
      <h1>hello</h1>
    </div>
  </div>
</template>

<script>
import { CollapseTransition, SlideYUpTransition } from "vue2-transitions";

export default {
  components: {
    CollapseTransition,
    SlideYUpTransition,
  },
  data() {
    return {
      show: true,
      fade: true,
      collapse: true,
    };
  },
  name: "Vue2Transitions",
  props: {
    title: String,
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible;
      console.log(entry);
    },
  },
};
</script>


<style scoped>
</style>
