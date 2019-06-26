<template>
 <div id='app-ga'>
  <!-- header -->
  <header-section :class="{blur : selectedImage}"/>
  <!-- /header -->
  <!-- page title -->

  <page-title-section  :class="{blur : selectedImage}" :page-title="'Gallery'" :url="'/gallery'"
                      :page-sub-title="galleryData !== undefined ? galleryData.name : ''"/>

  <!-- /page title -->

  <!-- courses -->
  <section class="section" :class="{blur : selectedImage}">
   <div class="container">
    <div class="row">
     <masonry
      :cols="{default: 4, '1000': 3, '700': 2, '400': 1}"
      :gutter="{default: '0', 700: '0'}">
       <div v-for="(pic, i) in galleryData.pics" :key="i"
            @click="setSelectedImage(pic)" class="col-lg-12 mb-5 gallery-pic cur-ptr">
        <div class="card rounded-2 hover-shadow">
         <div class="card-img position-relative">
          <img class="card-img-top rounded-0" :src="`/images/gallery/${galleryData.dir_name}/${pic.link}`"
               alt="event thumb">
          <div class="card-img-overlay justify-content-center">
           <i class="ti-plus feature-icon"></i>
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
  <light-box v-if="selectedImage" :gallery-data="galleryData" :sub-dir="galleryData.dir_name" :image-name-prop="'link'"
             :selected-image="selectedImage" v-on:setSelected="setSelectedImage($event)"/>
  <!--footer-->
  <footer-section  :class="{blur : selectedImage}"/>
  <!--/footer-->
 </div>
</template>

<script>
import Vue            from 'vue'
import { mapGetters } from 'vuex'
import VueMasonry     from 'vue-masonry-css'
import LightBox       from '../components/LightBox'

Vue.use(VueMasonry);

export default {
  name: "Gallery",
  components : { LightBox },
  props : ['galleryData', 'setTitle'],
  data () {
    return {
      picSetName : '',
      selectedImage: null
    }
  },
  computed : {
    ...mapGetters('gallery', { gallerySets : 'all' })
  },
  methods : {
    setSelectedImage (image) {
      this.selectedImage = image
    }
  },
  mounted () {
    // console.log(this.galleryData);
  }
}
</script>

<style lang="scss" scoped>
 @import "../assets/styles/scss/variables";
 .gallery-set{
  /*border-right: 1px solid #ccc;*/
 }

 .blur{
  filter: blur(6px);
 }
 .card-img{
  overflow: hidden;
  img{
   transition: all 3s ease;
  }
  &:hover{
   img {
    transform: scale(1.5);
   }
   .card-img-overlay{
    display: flex;
   }
  }

  .card-img-overlay{
   display: none;
  }
 }
 .card-img-overlay{
  background: transparentize($secondary-color, .4);

  i{
   color: $secondary-color;
  }
  margin: auto;
 }
</style>
