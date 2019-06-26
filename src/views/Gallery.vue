<template>
 <div id='app-ga'>
  <!-- header -->
  <header-section/>
  <!-- /header -->
  <!-- page title -->
  <page-title-section :page-title="'Gallery'" :url="this.$route"/>
  <!-- /page title -->

  <!-- courses -->
  <section class="section">
   <div class="container">
    <div class="row">
     <masonry
      :cols="{default: 3, '1000': 3, '700': 2, '400': 1}"
      :gutter="{default: '0', 700: '0'}">
      <div v-for="(gallerySet, i) in gallerySets" :key="i" class="col-lg-12 mb-5 gallery-set">
       <div class="card rounded-2 hover-shadow">
        <div class="card-img position-relative">
         <router-link :to="`/gallery/${i}/${gallerySet.name.toLocaleLowerCase()}`">
           <img class="card-img-top rounded-0" :src="`/images/gallery/${gallerySet.dir_name}/${gallerySet.thumbnail}`" alt="event thumb">
         </router-link>
         <!-- <div class="card-date"><span>18</span><br>December</div>-->
        </div>
        <div class="card-body">
         <!-- location -->
         <!--        <p><i class="ti-location-pin text-primary mr-2"></i></p>-->
         <router-link :to="`/gallery/${i}/${gallerySet.name.toLocaleLowerCase()}`">
          <h4 class="card-title">{{gallerySet.name}}</h4>
         </router-link>
        </div>
       </div>
      </div>
     </masonry>
     <!-- event -->

    </div>
   </div>
  </section>
  <!-- /courses -->
  <!--footer-->
  <footer-section />
  <!--/footer-->
 </div>
</template>

<script>
import Vue from 'vue'
import {mapGetters} from 'vuex'
import VueMasonry from 'vue-masonry-css'

Vue.use(VueMasonry);

export default {
  name: "Gallery",
  components : {VueMasonry},
  props : ['galleryData'],
  data () {
    return {
    }
  },
  computed : {
    ...mapGetters('gallery', { gallerySets : 'all' })
  },
  methods : {},
}
</script>

<style lang="scss" scoped>
 .gallery-set{
  /*border-right: 1px solid #ccc;*/
 }
</style>
