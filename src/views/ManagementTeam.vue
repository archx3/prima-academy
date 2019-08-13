<template>
 <div id='app-mgt'>
  <!-- header -->
  <header-section :title="pageTitle"/>
  <!-- /header -->
    <!-- page title -->
  <page-title-section :page-title="pageTitle" padding-top="250" :url="this.$route" :background="'/images/about/about-page-n.png'"/>
    <!-- /page title -->

    <!-- teachers -->
    <section class="section">
       <div data-ref="mixitup-target" class="container">
          <!-- teacher list -->
          <div class="row" data-ref="mixitup-container">
             <!-- teacher -->
             <div v-for="(member, index) in management" :key="index" data-ref="mixitup-target"
                  class="col-lg-4 col-sm-6 mb-5 staff">
                <div class="card rounded-0 hover-shadow">
                   <img class="card-img-top rounded-0" :src="`/images/gallery/management-team/${member.pic}`" alt="teacher">
                   <div class="card-body">
                      <router-link v-if="member.bio" :to="`/staff/${index}`">
                         <h4 class="card-title mb-0">{{member.name}}</h4>
                      </router-link>
                    <h4 v-else class="card-title mb-0">{{member.name}}</h4>
                      <p class="mb-0">{{member.role}}</p>
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
    return {
      pageTitle : 'Management Team'
    }
  },
  computed  : {
    ...mapGetters('school', { management : 'management' })
  },
  methods   : {},
}
</script>
