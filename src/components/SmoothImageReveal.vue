<template>
  <div>
    <div class="section">
      <h1>{{ title }}</h1>

      <div class="img-container">
        <img src="../assets/store2.png" alt="" />
        <div class="overlay"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  name: "SmoothImageReveal",
  props: {
    title: String,
  },
};
</script>


<style scoped>
.img-container {
  position: absolute;
  top: calc(50% - 200px);
  width: 600px;
  height: 400px;
  border-radius: 2px;
  left: calc(50% - 340px);
  overflow: hidden;
  animation: translate 1.5s;
  animation-fill-mode: forwards;
}

.img-container img {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(1.3);
  animation: pic 1.5s;
  animation-fill-mode: forwards;
}

.img-container .overlay {
  width: 100%;
  height: 100%;
  background: #F6F3EE;
  transform: scaleX(0);
  transform-origin: 0% 50%;
  animation: anim 1.5s;
}

@keyframes translate {
  to {
    transform: translate(40px);
  }
}

@keyframes pic {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  51% {
    opacity: 1;
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

@keyframes anim {
  0% {
    transform: scaleX(0);
    transform-origin: 0% 50%;
  }
  50% {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }
    51% {
    transform: scaleX(1);
    transform-origin: 100% 50%;
  }
  100% {
    transform: scaleX(0);
    transform-origin: 100% 50%;
  }
}
</style>
