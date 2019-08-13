<template>
 <div id='app-ev'>
    <!-- header -->
    <header-section :title="pageTitle"/>
    <!-- /header -->

  <!-- page title -->
  <page-title-section :page-title="pageTitle" :url="this.$route" :background="'/images/about/about-page-n.png'"/>
  <!-- /page title -->

  <!-- today's events -->
  <section class="section" v-if="today.length">
   <div class="container">
    <div class="row">
     <div class="col-12">
      <h2 class="section-title">Happening Today</h2>
     </div>
    </div>
    <div class="row">
     <!-- event -->
     <div v-for="(event, i) of upcoming" :key="i" class="col-lg-4 col-sm-6 mb-5">
      <div class="card border-0 rounded-0 hover-shadow">
       <div class="card-img position-relative">
        <img class="card-img-top rounded-0" :src="`/images/${event.image}`" alt="event thumb">
        <div v-if="event.startDate" class="card-date">
         <span>{{event.startDate.day}}</span><br>
         {{event.startDate.month}}<br>
         {{event.startDate.year}}</div>
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
  <!-- /today's events -->

  <!-- upcoming events -->
  <section class="section" v-if="upcoming.length">
   <div class="container">
    <div class="row">
     <div class="col-12">
      <h2 class="section-title">Upcoming</h2>
     </div>
    </div>
    <div class="row">
     <!-- event -->
     <div v-for="(event, i) of upcoming" :key="i" class="col-lg-4 col-sm-6 mb-5">
      <div class="card border-0 rounded-0 hover-shadow">
       <div class="card-img position-relative">
        <img class="card-img-top rounded-0" :src="`/images/${event.image}`" alt="event thumb">
        <div v-if="event.startDate" class="card-date">
         <span>{{event.startDate.day}}</span><br>
         {{event.startDate.month}}<br>
         {{event.startDate.year}}</div>
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
  <!-- /upcoming events -->

  <!-- past events -->
  <section class="section" v-if="past.length">
   <div class="container">
    <div class="row">
     <div class="col-12">
      <h2 class="section-title">Past Events</h2>
     </div>
    </div>
    <div class="row">
     <!-- event -->
     <div v-for="(event, i) of past" :key="i" class="col-lg-4 col-sm-6 mb-5">
      <div class="card border-0 rounded-0 hover-shadow">
       <div class="card-img position-relative">
        <img class="card-img-top rounded-0" :src="`/images/${event.image}`" alt="event thumb">
        <div v-if="event.startDate" class="card-date">
         <span>{{event.startDate.day}}</span><br>
         {{event.startDate.month}}<br>
         {{event.startDate.year}}</div>
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
  <!-- /past events -->
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
      pageTitle : 'Events'
    }
  },
  computed  : {
    ...mapGetters('events', { today : 'today',  upcoming : 'upcoming',  past : 'past'  }),
  },
  methods   : {}
}
</script>

<style lang="scss" scoped>

</style>
