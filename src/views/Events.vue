<template>
 <div id='app-ev'>
    <!-- header -->
    <header-section :title="pageTitle"/>
    <!-- /header -->

  <!-- page title -->
  <page-title-section :page-title="pageTitle" :url="this.$route" :background="'/images/about/about-page-n.png'"/>
  <!-- /page title -->

  <!-- events -->
  <section class="section">
   <div class="container">
    <div class="row">
     <!-- event -->
     <div v-for="(event, i) of events" :key="i" class="col-lg-4 col-sm-6 mb-5">
      <div class="card border-0 rounded-0 hover-shadow">
       <div class="card-img position-relative">
        <img class="card-img-top rounded-0" src="images/events/event-1.jpg" alt="event thumb">
        <div class="card-date">
         <span>{{event.date.day}}</span><br>
         {{event.date.month}}<br>
         {{event.date.year}}</div>
       </div>
       <div class="card-body">
        <!-- location -->
        <p><i class="ti-location-pin text-primary mr-2"></i>{{event.venue}}</p>
        <router-link :to="`/event/${i}`">
         <h4 class="card-title">{{event.name}}</h4>
        </router-link>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
  <!-- /events -->

    <!--footer-->
    <footer-section />
    <!--/footer-->
 </div>
</template>

<script>
import { mapGetters }   from 'vuex';
export default {
  name      : 'Events',
  components: {},
  props     : [],
  data () {
    return {
      pageTitle : 'Upcoming Events'
    }
  },
  computed  : {
    ...mapGetters('events', { events : 'events' }),
  },
  methods   : {}
}
</script>

<style lang="scss" scoped>

</style>
