<template>
 <div id='app-ga' class="csspointerevents position-relative">
  <!-- header -->
  <header-section :class="{blur : selectedImage}" :title="`${galleryData ? galleryData.name : ''}`"/>
  <!-- /header -->
  <!-- page title -->

  <page-title-section :class="{blur : selectedImage}" :page-title="pageTitle" :url="'/gallery'"
                      :page-sub-title="galleryData !== undefined ? galleryData.name : ''"/>
  <!-- /page title -->

  <!-- courses -->
  <section class="section" :class="{blur : selectedImage}">
   <div class="container">
    <div class="row">
     <masonry
      :cols="{default: 4, '1000': 3, '700': 2, '400': 1}"
      :gutter="{default: '15', 700: '0'}">
      <div v-for="n in galleryData.pics" :key="n"
           @click="setSelectedImage(n)" class="col-lg-12 rounded-0 gallery-pic cur-ptr p-0 mb-3">
       <div class="card rounded-0 hover-shadow">
        <div class="card-img position-relative"
             @mouseenter="mouseEnterHandler" @mouseleave="mouseOutHandler" @mousemove="mouseMoveHandler">
         <lazy-image image-class="card-img-top rounded-0" style="min-height: 120px"
                     :low-res-src="`https://primaca.sirv.com/Images/${galleryData.dir_name}/${n}.jpg?q=16`"
                     :src="`https://primaca.sirv.com/Images/${galleryData.dir_name}/${n}.jpg`"/>
         <div class="card-img-overlay justify-content-center">
          <!--          <i class="ti-plus feature-icon"></i>-->
         </div>
        </div>
       </div>
      </div>
     </masonry>
     <!-- event -->
     <!--<template v-if="galleryData !== undefined">
     </template>-->
    </div>
   </div>
  </section>
  <!-- /courses -->
  <light-box :gallery-data="galleryData" :sub-dir="galleryData.dir_name" :image-name-prop="'raw'"
             :selected-image="selectedImage" v-on:setSelected="setSelectedImage($event)"/>
  <!--footer-->
  <footer-section :class="{blur : selectedImage}"/>
  <div class="cursor" :class="{hidden : cursor.hidden}" id="cursor"
       :style="{ top : `${cursor.y}px`, left : `${cursor.x}px`}">
   <div class="cross">
    <div class="b b1"></div>
    <div class="b b2"></div>
   </div>
   <svg class="circle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid"
        width="52" height="52" viewBox="0 0 52 52">
    <path d="M1,26a25,25 0 1,0 50,0a25,25 0 1,0 -50,0"></path>
   </svg>
  </div>
 </div>
</template>

<script>
import Vue            from 'vue'
import { mapGetters } from 'vuex'
import VueMasonry     from 'vue-masonry-css'
import LightBox       from '../components/LightBox'

Vue.use(VueMasonry);

export default {
  name      : 'Gallery',
  components: { LightBox },
  props     : ['galleryData', 'setTitle'],
  data () {
    return {
      picSetName   : '',
      selectedImage: null,
      cursor       : {
        hidden: true,
        x     : 0,
        y     : 0
      },
      pageTitle : 'Gallery '
    }
  },
  computed  : {
    ...mapGetters('gallery', { gallerySets: 'all' })
  },
  methods   : {
    setSelectedImage (image) {
      console.log(image);
      this.selectedImage = image
    },
    mouseMoveHandler (e) {
      e = e || window.event;

      this.cursor.x = e.clientX;
      this.cursor.y = e.clientY;
      // }
    },
    mouseEnterHandler () {
      this.cursor.hidden = false;
    },
    mouseOutHandler () {
      this.cursor.hidden = true;
    }
  },
  mounted () {
    // console.log(this.galleryData);
  }
}
</script>

<style lang="scss" scoped>
 @import "../assets/styles/scss/variables";

 .gallery-set {
  /*border-right: 1px solid #ccc;*/
 }

 .blur {
  filter: blur(6px);
 }

 .card-img {
  overflow: hidden;

  img {
   transition: all 1s ease;
  }

  &:hover {
   img {
    transition: all 3s ease;
    transform: scale(1.5);
   }

   .card-img-overlay {
    display: flex;
   }
  }

  .card-img-overlay {
   display: none;
  }
 }

 .card-img-overlay {
  background: transparentize($secondary-color, .4);

  i {
   color: $primary-color;
   margin: auto;
  }
 }
</style>
<style lang="scss">
 @import "../assets/styles/scss/variables";

 .cursor {
  position: fixed;
  left: 0;
  top: 0;
  width: 49px;
  height: 49px;
  opacity: 1;
  display: none;
  pointer-events: none;

  -webkit-transition: opacity 0.6s;
  transition: opacity 0.6s;
  z-index: 10000;

  .cross {
   position: absolute;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   margin: auto;
   width: 27px;
   height: 27px;
   -webkit-transition: all 0.4s;
   transition: all 0.4s;
  }

  .circle {
   width: 49px;
   height: 49px;
   -ms-transform: rotate(0);
   transform: rotate(0);
   -webkit-transition: all 0.4s;
   transition: all 0.4s;

   path {
    fill: none;
    stroke-width: 2px;
    stroke: $primary-color;
    opacity: 0.6;
    stroke-dashoffset: 0;
    stroke-dasharray: 157;
    transition: all 0.6s;
   }
  }

  &.hidden {
   opacity: 0;

   .cross {
    -ms-transform: rotate(-90deg);
    transform: rotate(-90deg);
   }

   .circle {
    -ms-transform: rotate(135deg);
    transform: rotate(135deg);

    path {
     stroke-dashoffset: 157;
     stroke-dasharray: 157;
    }
   }
  }

  .b {
   position: absolute;
   margin: auto;
   background: $primary-color;
  }
  .b1 {
   width: 4px;
   height: 100%;
   left: 0px;
   right: 0px;
  }
  .b2 {
   height: 4px;
   width: 100%;
   top: 0px;
   bottom: 0px;
  }
 }

 .csspointerevents .cursor {
  display: block;
 }

 .gallery-pic {
  cursor: none;
 }
</style>
