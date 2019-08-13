<template>
 <div class="nivo-lightbox-overlay" :class="{'nivo-lightbox-open' : selectedImage !== null}">
  <div class="inner-overlay" @click="hideLightBox"></div>

  <div class="nivo-lightbox-wrap">
   <div class="nivo-lightbox-content">
    <div class="nivo-lightbox-image" style="line-height: 373px; height: 100%;">

     <div ref="displays" :style="{transform : `scale(${zoom}) translateX(${pan.x}px) translateY(${pan.y}px)`}" class="nivo-lightbox-image-inner">
      <!--<img v-if="selectedImage !== null" @dblclick="this.resetZoomAndPan" @mousedown.prevent="mouseDownHandler($event)"
           :src="`/images/gallery/${subDir+'/'}${selectedImage}.jpg`"
           class="nivo-lightbox-image-display shadow-display" alt="">-->
      <img v-if="selectedImage !== null" @dblclick="this.resetZoomAndPan" @mousedown.prevent="mouseDownHandler($event)"
           :src="`/images/gallery/${subDir+'/'}${selectedImage}.jpg`"
           class="nivo-lightbox-image-display" alt="">
     </div>
    </div>
   </div>

   <!--   <div class="nivo-lightbox-title-wrap">Image Title Here</div>-->
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
    },
  },
  data () {
    return {
      maxIndex: this.galleryData ? this.galleryData.pics : 0,
      zoom    : 1,
      rotation: 0,
      pan     : {
        x: 0,
        y: 0
      },
      imageElInView : 1
    }
  },
  computed: {
    panRatio () {
      return this.zoom;
    },
    currentImageIndex () {
      console.log(this.galleryData.pics);
      return this.galleryData.selected !== null ? this.selectedImage : -1
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
    slideRight () {
     let imageEls = this.$refs.displays.children;
     if (this.imageElInView === 1) {
       imageEls[1].style.left = '150%'
       imageEls[0].style.left = '0'
     }
    },
    next () {
      this.setSelectedImage(this.currentImageIndex < this.maxIndex // eslint-disable-next-line indent
                            ? this.currentImageIndex + 1 : 0);
      this.slideRight()
    },
    previous () {
      this.setSelectedImage(this.currentImageIndex > 0 ? this.currentImageIndex - 1 : this.maxIndex)
    },
    setSelectedImage (image) {
      this.resetZoomAndPan()
      this.$emit('setSelected', image)
    },
    resetZoomAndPan () {
      this.zoom = 1;
      this.rotation = 0;
      this.pan = {
        x: 0,
        y: 0
      }
      document.documentElement.scrollTop = 0;
    },
    mouseWheelHandler () {
      let delta  = window.scrollY,
          zoomBy = 0.02;

      if (this.selectedImage !== null)
      {
        if (delta > this.lastScrollTop) // scrolling down let's zoom in
        {
          this.zoom += zoomBy
        } else // scrolling up let's zoom out
        {
          this.zoom -= zoomBy
        }
      }
      this.lastScrollTop = delta
    },
    /**
     * Returns the computed property Value for
     * translate(X|Y|Z)
     * @param obj {Element|HTMLElement}
     * @param axis {String<'x'|'y'|'z'>}
     * @returns {number}
     */
    getComputedTranslate (obj, axis) {
      if (!window.getComputedStyle) return;
      axis = axis.toLocaleLowerCase();
      var style       = getComputedStyle(obj),
          transform   = style.transform,
          matrixIndex = axis === 'x' ? 4 : axis === 'y' ? 5 : 14;
      var mat = transform.match(/^matrix3d\((.+)\)$/);

      if (mat) { return parseFloat(mat[1].split(', ')[13]); }
      mat = transform.match(/^matrix\((.+)\)$/);

      return mat ? parseFloat(mat[1].split(', ')[matrixIndex]) : 0;
    },
    mouseDownHandler (e) {
      let el = e.target;
      let _this = this;
      let mouseDownX = event.clientX;
      let mouseDownY = event.clientY;

      var originalLeft = _this.getComputedTranslate(el, 'x');
      var originalTop = _this.getComputedTranslate(el, 'y');

      function dragMe (event) {
        _this.pan.x = (originalLeft + event.clientX - mouseDownX) / _this.panRatio;
        _this.pan.y = (originalTop + event.clientY - mouseDownY) / _this.panRatio;
      }

      function dropMe (event) {
        document.removeEventListener('mousemove', dragMe, false);
        document.removeEventListener('mouseup', dropMe, false);
      }

      if (el === e.target && _this.zoom > 1) {
        document.addEventListener('mouseup', dropMe, false);
        document.addEventListener('mousemove', dragMe, false);
      }
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

  img {
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
  @include mobile {
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
  @include mobile {
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
  transition: all 0.34s cubic-bezier(1, .1, 0, 1.01);
  transform-origin: center;

  &:hover {
   color: $primary-color !important;
   //<!--background: $primary-color;-->
   transform: rotate(90deg);
   /*box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.3);*/
  }
 }

 .nivo-lightbox-content iframe {
  width: 100%;
  height: 100%;
 }

 .nivo-lightbox-error p {
  display: table-cell;
  vertical-align: middle;
 }

 .shadow-display{
  /*position: absolute;*/
  transition: all .3s cubic-bezier(.93,-0.01,.58,1);
  //left: -100%;
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
  position: relative;
  display: inline-block;
  margin: 0 auto;
 }
 .nivo-lightbox-image-inner{
  height: 100%;
  overflow: hidden;
  display: flex;
 }
</style>
