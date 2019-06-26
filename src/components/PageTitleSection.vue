<template>
 <section class="page-title-section overlay" v-background="background">
  <div class="container">
   <div class="row">
    <div class="col-md-8">
     <ul class="list-inline custom-breadcrumb">
      <li class="list-inline-item">
       <router-link class="h2 text-primary font-secondary" :to="url">{{pageTitle}}</router-link>
      </li>
      <li class="list-inline-item text-white h3 font-secondary">/</li>
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
      default : '/images/backgrounds/page-title.jpg'
    },
    pageTitle : {},
    pageSubTitle : {},
    pageDescription : {
      default : null
    }
  }
}
</script>
