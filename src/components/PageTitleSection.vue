<template>
 <section class="page-title-section overlay" :style="{paddingTop: paddingTop + 'px'}"
          v-lazy-background="{
        blur : true,
        lowResSrc : `${background}?q=3`,
        highResSrc : `${background}`,
        }">
  <div class="container">
   <div class="row">
    <div class="col-md-8">
     <ul class="list-inline custom-breadcrumb">
      <li class="list-inline-item">
       <router-link class="h2 text-primary font-secondary" :to="url">{{pageTitle}}</router-link>
      </li>
      <li v-if="pageSubTitle" class="list-inline-item text-white h3 font-secondary"><i class="ti-angle-right"></i></li>
      <li v-if="pageSubTitle" class="list-inline-item text-white h3 font-secondary">{{pageSubTitle}}</li>
     </ul>
     <p v-if="pageDescription" class="text-lighten">{{pageDescription}}</p>
    </div>
   </div>
  </div>
 </section>
</template>
<script>
export default {
  name: 'page-title-section',
  props : {
    url : {
      // default: this.$route
    },
    background : {
      default : 'https://primaca.sirv.com/Images/about/about-page-n.png'
    },
    pageTitle : {},
    pageSubTitle : {},
    pageDescription : {
      default : null
    },
    paddingTop : {
      default : 200
    }
  }
}
</script>
<style lang="scss" scoped>
 .page-title-section{
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
 }
</style>
