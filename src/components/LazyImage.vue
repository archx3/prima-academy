<template>
 <figure v-lazy-load class="image__wrapper" :class="{'blurry-vision' : lowResSrc !== ''}">
  <loader></loader>
  <img
   class="image__item"
   :class="imageClass"
   :style="imageStyle"
   :src="lowResSrc"
   :data-url="src"
   :width="width"
   :height="height"
   :alt="alt">
 </figure>
</template>

<script>
import LazyLoad from "../directives/LazyLoad";

export default {
  name       : "lazy-image",
  directives : {
    'lazy-load' : LazyLoad
  },
  components : {},
  props      : {
    src       : {
      type     : String,
      required : true
    },
    alt       : {
      type     : String,
      default : '',
    },
    lowResSrc : {
      default : '',
      type    : String
    },
    width : {
      type    : String,
      default : '',
    },
    height : {
      type    : String,
      default : ''
    },
    imageClass : {
      type    : String,
      default : ''
    },
    imageStyle : {
      type    : String,
      default : ''
    }
  },
  data ()
  {
    return {
      loaded : false
    }
  },
  computed   : {},
  methods    : {},
  mounted ()
  {
  },

  created ()
  {
  },
  destroyed (el)
  {
  }
}
</script>

<style lang="scss" scoped>
 @keyframes scaleOut {
  100% {
   display: none;
  }
 }

 figure {
  margin: 0;
  &.blurry-vision{
   img{
    filter: blur(12px);
    transition: all .7s ease-out;
   }
  }
  &.loaded {
   .loader{
    display: none;

    //<!--transition: all .3s cubic-bezier(1,-0.03,.67,.99);-->
    /*transform: scaleY(0);*/
    /*animation: scaleOut;*/
   }

   &.blurry-vision {
    img{
     filter: blur(0);
    }
   }
  }
 }

</style>
