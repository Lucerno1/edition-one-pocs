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

<b-container class="vh-100 d-flex align-items-center justify-content-center">
 <h1>Keep scrolling for the transition on entering the viewport</h1>
</b-container>

    
    <!-- Collapse Transition on intersection -->
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
              >Button</b-button
            >
          </div>
        </b-col>
        <b-col class="col-6" v-observe-visibility="visibilityChanged">
          <div class="h-25"></div>
          <CollapseTransition :duration="1000" v-observe-visibility="visibilityChanged">
            <div v-show="isIntersecting">
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
      isIntersecting: true,
    };
  },
  name: "Vue2Transitions",
  props: {
    title: String,
  },
  methods: {
    visibilityChanged(isIntersecting, entry) {
setTimeout(() => {
      this.isIntersecting = isIntersecting;
      console.log(entry);
      }, 800);
    },
  },
};
</script>


<style scoped>
</style>
