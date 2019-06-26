<template>
 <div id='app-mgt'>
  <!-- header -->
  <header-section/>
  <!-- /header -->

  <!-- page title -->
  <section class="page-title-section overlay" data-background="images/backgrounds/page-title.jpg">
   <div class="container">
    <div class="row">
     <div class="col-md-8">
      <ul class="list-inline custom-breadcrumb">
       <li class="list-inline-item"><a class="h2 text-primary font-secondary" href="teacher.html">The {{staff.role}}</a></li>
      </ul>
     </div>
    </div>
   </div>
  </section>
  <!-- /page title -->

  <!-- teacher details -->
  <section class="section">
   <div class="container">
    <div class="row">
     <div class="col-md-5 mb-5">
      <img class="img-fluid w-100" src="images/teachers/teacher-1.jpg" alt="teacher">
     </div>
     <div class="col-md-6 mb-5">
      <h3>{{staff.name}}</h3>
      <p class="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque accusamus tenetur ea harum delectus ab consequatur excepturi, odit qui in quo quia voluptate nam optio, culpa aspernatur. Error placeat iusto officia voluptas quae.</p>
      <div class="row">
       <div class="col-md-6 mb-5 mb-md-0">
        <h4 class="mb-4">CONTACT INFO:</h4>
          <ul class="list-unstyled">
             <li v-if="staff.email" class="mb-3">
                <a class="text-color" href="mailto:johndoe@email.com"><i class="ti-email mr-2"></i>{{staff.email}}</a>
             </li>
             <li v-if="staff.phone" class="mb-3">
                <a class="text-color" href="callto:+120345876"><i class="ti-mobile mr-2"></i>{{staff.phone}}</a>
             </li>
             <li v-if="staff.skype" class="mb-3">
                <a class="text-color" href="#"><i class="ti-skype mr-2"></i>staff.skype</a>
             </li>
          </ul>
       </div>
      </div>
     </div>
     <div v-if="staff.bio" class="col-12">
      <h4 class="mb-4">BIOGRAPHY</h4>
      <p class="mb-5">{{staff.bio}}</p>
     </div>
    </div>
   </div>
  </section>
  <!-- /teacher details -->
  <!--footer-->
  <footer-section/>
  <!--/footer-->
 </div>
</template>

<script>
// import { mapGetters } from 'vuex';
export default {
  name      : 'Staff',
  components: {},
  props     : ['staff'],
  data () {
    return {
      id : this.$route.params.id
    }
  },
  methods   : {},
  computed  : {
    // ...mapGetters('school', { staff : 'management' }),
  }
}
</script>

<style lang="scss" scoped>

</style>
