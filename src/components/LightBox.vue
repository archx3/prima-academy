<template>
 <div class="nivo-lightbox-overlay" :class="{'nivo-lightbox-open' : selectedImage !== null}">
  <div class="inner-overlay" @click="hideLightBox"></div>

  <div class="nivo-lightbox-wrap">
   <div class="nivo-lightbox-content">
    <div class="nivo-lightbox-image" style="line-height: 373px; height: 100%;">
     <img v-if="selectedImage !== null"
          :style="{transform : `scale(${zoom})`}"
          :src="`/images/gallery/${subDir+'/'}${selectedImage[imageNameProp]}`"
          class="nivo-lightbox-image-display" alt="">
    </div>
   </div>

   <div class="nivo-lightbox-title-wrap">Image Ttile Here</div>
  </div>

  <div class="nivo-lightbox-nav nivo-lightbox-prev" @click.prevent="previous" style="font-size: 35px">
   <i class="ti-arrow-left"></i>
  </div>
  <div class="nivo-lightbox-nav nivo-lightbox-next" @click.prevent="next" style="font-size: 35px">
   <i class="ti-arrow-right"></i>
  </div>
  <div class="nivo-lightbox-close" @click="hideLightBox">
   <i class="ti-close"></i>
  </div>
<!--  <a @click="hideLightBox" class=" nivo-lightbox-close" title="Close" style="{width: 40px; height: 40px}">&times;</a>-->
 </div>
</template>
<script>
export default {
  name    : 'light-box',
  props   : {
    galleryData  : {},
    selectedImage: {},
    subDir       : {
      default: ''
    },
    imageNameProp: {
      default: 'link'
    }
  },
  data () {
    return {
      maxIndex: this.galleryData ? this.galleryData.pics.length - 1 : 0,
      zoom : 1,
      rotation : 0
    }
  },
  computed: {
    /* maxIndex         : function () {
    return this.galleryData.images.length - 1
    }, */
    currentImageIndex: function () {
      return this.galleryData.selected !== null ? this.galleryData.pics.indexOf(this.selectedImage) : -1
    }
  },
  created () {
    window.addEventListener('keyup', this.keyEventsHandler)
  },
  destroyed () {
    window.removeEventListener('keyup', this.keyEventsHandler);
  },
  methods : {
    hideLightBox () {
      this.setSelectedImage(null)
    },
    keyEventsHandler: function (e) {
      if (e.key === 'ArrowRight' || e.key === 'Enter') {
        this.next()
      } else if (e.key === 'ArrowLeft') {
        this.previous()
      } else if (e.key === 'Escape') {
        this.hideLightBox()
      }
    },
    next () {
      this.setSelectedImage(this.currentImageIndex < this.maxIndex // eslint-disable-next-line indent
                            ? this.galleryData.pics[this.currentImageIndex + 1] : this.galleryData.pics[0])
    },
    previous () {
      this.setSelectedImage(this.galleryData.pics[this.currentImageIndex > 0 ? this.currentImageIndex - 1 : this.maxIndex])
    },
    setSelectedImage (image) {
      this.zoom = 1
      this.$emit('setSelected', image)
    },
    mouseWheelHandler () {
      let delta = window.scrollY,
        zoomBy = 0.02;

      if (this.selectedImage !== null)
      {
        console.log(this.setSelectedImage);
        if (delta > this.lastScrollTop) // scrolling down
        {
          // if (this.zoom > 1){
          this.zoom -= zoomBy
          // }
          console.log('scrolling down');
        }
        else // scrolling up
        {
          console.log('scrolling up');

          // if (this.zoom < 1) {
          this.zoom += zoomBy
          // }
        }
      }
      this.lastScrollTop = delta
    }
  },
  mounted () {
    window.addEventListener('scroll', this.mouseWheelHandler)
  }
}
</script>
<style scoped lang="scss">
 @import "../assets/styles/scss/variables";
 @import "../assets/styles/scss/mixins";

 /*!
* Nivo Lightbox v1.3.1
* http://dev7studios.com/nivo-lightbox
*
* Copyright 2013, Dev7studios
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

 .nivo-lightbox-image img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  vertical-align: middle;
 }

 .nivo-lightbox-error p {
  display: table-cell;
  vertical-align: middle;
 }

 .nivo-lightbox-overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  overflow: hidden;
  visibility: hidden;
  opacity: 0;
  background: rgba(0, 0, 0, 0.8);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  transform: scale(0.7);
  transition: all .3s;

  .inner-overlay {
   position: absolute;
   height: inherit;
   width: inherit;
  }
 }

 .nivo-lightbox-overlay.nivo-lightbox-open {
  visibility: visible;
  opacity: 1;
  transform: scale(1);
 }

 .nivo-lightbox-wrap {
  position: absolute;
  top: 10%;
  bottom: 10%;
  left: 10%;
  right: 10%;
  pointer-events: none;
 }

 .nivo-lightbox-content {
  width: 100%;
  height: 100%;
  pointer-events: none;
  img{
   pointer-events: all;
  }
 }

 .nivo-lightbox-title-wrap {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  text-align: center;
 }

 @-webkit-keyframes toRightFromLeft {
  49% {
   -webkit-transform: translate(100%);
  }
  50% {
   opacity: 0;
   -webkit-transform: translate(-100%);
  }
  51% {
   opacity: 1;
  }
 }

 @-moz-keyframes toRightFromLeft {
  49% {
   -moz-transform: translate(100%);
  }
  50% {
   opacity: 0;
   -moz-transform: translate(-100%);
  }
  51% {
   opacity: 1;
  }
 }

 @keyframes toRightFromLeft {
  49% {
   transform: translate(100%);
  }
  50% {
   opacity: 0;
   transform: translate(-100%);
  }
  51% {
   opacity: 1;
  }
 }

 .hi-icon-effect-5b .hi-icon:hover:before {
  -webkit-animation: toLeftFromRight 0.3s forwards;
  -moz-animation: toLeftFromRight 0.3s forwards;
  animation: toLeftFromRight 0.3s forwards;
 }

 @-webkit-keyframes toLeftFromRight {
  49% {
   -webkit-transform: translate(-100%);
  }
  50% {
   opacity: 0;
   -webkit-transform: translate(100%);
  }
  51% {
   opacity: 1;
  }
 }

 @-moz-keyframes toLeftFromRight {
  49% {
   -moz-transform: translate(-100%);
  }
  50% {
   opacity: 0;
   -moz-transform: translate(100%);
  }
  51% {
   opacity: 1;
  }
 }

 @keyframes toLeftFromRight {
  49% {
   transform: translate(-100%);
  }
  50% {
   opacity: 0;
   transform: translate(100%);
  }
  51% {
   opacity: 1;
  }
 }

 .nivo-lightbox-nav {
  /*display: none;*/
  z-index: 102;
  cursor: pointer;
  color: #fff;

  width: 50px;
  height: 50px;
  padding: 9px 0;
  border-radius: 50%;
  text-align: center;
  position: relative;
  transform: translateY(-50%);
  box-shadow: none;
  overflow: hidden;
  -webkit-transition: background 0.3s, color 0.3s, box-shadow 0.3s;
  -moz-transition: background 0.3s, color 0.3s, box-shadow 0.3s;
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;

  i {
   /*line-height: 90px;*/
   font-style: normal;
   display: block;
   -webkit-font-smoothing: antialiased;
  }

  &:hover {
   color: ($primary-color);
   box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.3);

   i {
    -webkit-animation: toRightFromLeft 0.3s forwards;
    -moz-animation: toRightFromLeft 0.3s forwards;
    animation: toRightFromLeft 0.3s forwards;
   }
  }
 }

 .nivo-lightbox-prev {
  position: absolute;
  top: 50%;
  left: 35px;
   @include mobile{
     left: 1px;
   }
  &:hover {

   i {
    -webkit-animation: toLeftFromRight 0.3s forwards;
    -moz-animation: toLeftFromRight 0.3s forwards;
    animation: toLeftFromRight 0.3s forwards;
   }
  }
 }

 .nivo-lightbox-next {
  position: absolute;
  top: 50%;
  right: 35px;
   @include mobile{
     right: 1px;
   }
 }

 .nivo-lightbox-close {
  position: absolute;
  top: 2%;
  right: 2%;
  cursor: pointer;
 }

 .nivo-lightbox-close {
  color: #fff !important;
  padding: 7px;
  font-size: 21px !important;
  text-align: center;
  width: 35px;
  height: 35px;
  line-height: .4;
  background: transparent;
  //border: 2px solid $primary-color;-->
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-transition: all 0.4s;
  transition: all 0.34s cubic-bezier(1,.1,0,1.01);
  transform-origin: center;
  &:hover {
   color: $primary-color !important;
   //<!--background: $primary-color;-->
   transform: rotate(90deg);
   /*box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.3);*/
  }
 }

 .nivo-lightbox-image {
  text-align: center;
 }

 .nivo-lightbox-image img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  vertical-align: middle;
 }

 .nivo-lightbox-content iframe {
  width: 100%;
  height: 100%;
 }

 .nivo-lightbox-error p {
  display: table-cell;
  vertical-align: middle;
 }
</style>
