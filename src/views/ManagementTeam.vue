<template>
 <div id='app-mgt'>
  <!-- header -->
  <header-section/>
  <!-- /header -->
    <!-- page title -->
  <page-title-section :page-title="'Management Team'" :url="this.$route"/>
    <!-- /page title -->

    <!-- teachers -->
    <section class="section">
       <div data-ref="mixitup-target" class="container">
          <!-- teacher list -->
          <div class="row" data-ref="mixitup-container">
             <!-- teacher -->
             <div v-for="(member, index) in management" :key="index" data-ref="mixitup-target"
                  class="col-lg-4 col-sm-6 mb-5 staff">
                <div class="card border-0 rounded-0 hover-shadow">
                   <img class="card-img-top rounded-0" src="images/teachers/teacher-1.jpg" alt="teacher">
                   <div class="card-body">
                      <router-link :to="`/staff/${index}`">
                         <h4 class="card-title">{{member.name}}</h4>
                      </router-link>
                      <p>{{member.role}}</p>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </section>
    <!-- /teachers -->
  <!--footer-->
  <footer-section/>
  <!--/footer-->
 </div>
</template>

<script>
  import { mapGetters }   from 'vuex';
  import PageTitleSection from '../components/PageTitleSection'

  export default {
  name      : 'ManagementTeam',
  components: { PageTitleSection },
  props     : [],
  data () {
    return {}
  },
  computed  : {
    ...mapGetters('school', { management : 'management' })
  },
  methods   : {},
}
</script>

