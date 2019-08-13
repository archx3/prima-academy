<template>
 <section class="section-sm">
  <div class="container">
   <div class="row">
    <div class="col-12">
     <div class="d-flex align-items-center section-title justify-content-between">
      <h2 class="mb-0 text-nowrap mr-3">Academic Sections</h2>
      <div class="border-top w-100 border-primary d-none d-sm-block"></div>
     </div>
    </div>
   </div>
   <!-- course list -->
   <div class="row justify-content-center">
    <!-- course item -->
    <div v-for="(section, index) in academicSections" :key="index"
         class="col-lg-4 col-sm-6 mb-5 p-0 academic-section">
     <div class="card p-0 border-primary rounded-0 hover-shadow">

      <div class="icon overflow-hidden bg-cover" style="height: 150px"
           v-background="`https://primaca.sirv.com/Images/ch/${section.pic}`">
       <!-- <span class="ti-user"></span>-->
      </div>
      <div class="card-body">
       <router-link to="#" href="course-single.html"><!--FIXME replace with view router link-->
        <h4 class="card-title">{{section.name}}</h4>
       </router-link>
       <p class="card-text mb-4"> {{section.description}}.</p>
       <a href="#" class="btn btn-primary btn-sm read-more">
        <span class="read-more-text">Read More</span>
        <span class="arrow"> &rightarrow;</span>
       </a>
      </div>
     </div>
    </div>
   </div>
   <!-- /course list -->
   <!-- mobile see all button -->
   <div class="row">
    <div class="col-12 text-center">
     <a href="courses.html" class="btn btn-sm btn-primary-outline d-sm-none d-inline-block">sell all</a>
    </div>
   </div>
  </div>
 </section>
</template>
<script>
import { mapGetters }   from 'vuex';
export default {
  name: 'academic-sections',
  data () {
    return {
      currentYear : new Date().getFullYear()
    }
  },
  computed : {
    ...mapGetters('school', { info : 'info', academicSections : 'academicSections' }),
    ...mapGetters('address', { address : 'all' }),
  },
}
</script>
<style lang="scss">
 .academic-section {
 }

 .read-more-text {
  display: none;
  transition: all .3s ease-out;
 }

 .read-more {
  transition: all .3s ease-out;

  &:hover {
   .read-more-text {
    display: inline;
   }
  }
 }
</style>
