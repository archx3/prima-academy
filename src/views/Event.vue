<template>
 <div id='app-evs'>
  <!-- header -->
  <header-section :title="`${pageTitle} > ${eventName}`"/>
  <!-- /header -->
  <!-- page title -->

  <page-title-section :page-title="pageTitle" :page-sub-title="eventName" :url="'/events'" :background="'/images/about/about-page-n.png'"/>
  <!-- /page title -->
  <!-- event single -->
  <section class="section-sm">
   <div class="container">
    <div class="row">
     <div class="col-12">
      <h2 class="section-title">{{events[id].name}}</h2>
     </div>
     <!-- event image -->
     <div v-if="events[id].image" class="col-12 mb-4">
      <img :src="`/images/${events[id].image}`" alt="event thumb" class="img-fluid w-100">
     </div>
    </div>
    <!-- event info -->
    <div class="row align-items-center mb-5">
     <div class="col-lg-12">
      <ul class="list-inline">
       <li class="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
        <div class="d-flex align-items-center">
         <i class="ti-location-pin text-primary icon-md mr-2"></i>
         <div class="text-left">
          <p class="mb-0">LOCATION</p>
          <h6 class="mb-0">{{events[id].venue}}</h6>
         </div>
        </div>
       </li>
       <li v-if="events[id].date" class="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
        <div class="d-flex align-items-center">
         <i class="ti-calendar text-primary icon-md mr-2"></i>
         <div class="text-left">
          <p class="mb-0">DATE</p>
          <h6 class="mb-0">{{events[id].date.day}}-{{events[id].date.month}}-{{events[id].date.year}}</h6>
         </div>
        </div>
       </li>
       <li class="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
        <div class="d-flex align-items-center">
         <i class="ti-calendar text-primary icon-md mr-2"></i>
         <div class="text-left">
          <p class="mb-0">STARTS </p>
          <h6 class="mb-0">{{events[id].startDate.get('day')}}-{{events[id].startDate.get('month')}}-{{events[id].startDate.get('year')}}</h6>
         </div>
        </div>
       </li>

       <li v-if="events[id].endDate" class="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
        <div class="d-flex align-items-center">
         <i class="ti-calendar text-primary icon-md mr-2"></i>
         <div class="text-left">
          <p class="mb-0">ENDS </p>
          <h6 class="mb-0">{{events[id].endDate.day}}-{{events[id].endDate.month}}-{{events[id].endDate.year}}</h6>
         </div>
        </div>
       </li>
       <li v-if="events[id].startTime" class="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
        <div class="d-flex align-items-center">
         <i class="ti-time text-primary icon-md mr-2"></i>
         <div class="text-left">
          <p class="mb-0">TIME</p>
          <h6 class="mb-0">{{events[id].startTime}}</h6>
         </div>
        </div>
       </li>
       <li v-if="events[id].fee" class="list-inline-item mr-xl-5 mr-4 mb-3 mb-lg-0">
        <div class="d-flex align-items-center">
         <i class="ti-wallet text-primary icon-md mr-2"></i>
         <div class="text-left">
          <p class="mb-0">FEE</p>
          <h6 class="mb-0">GH¢ {{events[id].fee}}</h6>
         </div>
        </div>
       </li>
      </ul>
     </div>
     <div class="col-lg-3 text-lg-right text-left">
      <!--                  <a href="#" class="btn btn-primary disabled">Apply now</a>-->
     </div>
     <!-- border -->
     <div class="col-12 mt-4 order-4">
      <div class="border-bottom border-primary"></div>
     </div>
    </div>
    <!-- event details -->
    <div class="row">
     <div v-for="(section, i) in events[id].description" :key="i" class="col-12 mb-50">
      <h2 class="section-title h3 font-weight-bold">{{section.head}}</h2>
      <template v-if="Array.isArray(section.body)">
       <p v-for="(paragraph, p) in section.body" :key="p" class="lh2">{{paragraph}}.</p>
      </template>
      <p v-else class="lh2">{{section.body}}.</p>
     </div>
    </div>
    <!-- event speakers -->
    <div v-if="events[id].speakers.length > 0" class="row">
     <div class="col-12">
      <h3 class="mb-4">Speakers</h3>
     </div>
     <!-- speakers -->
     <div v-for="(speaker, i) of events[id].speakers" :key="i" class="col-lg-3 col-sm-6 mb-4 mb-lg-0">
      <div class="media">
       <img class="mr-3 img-fluid" src="images/event-speakers/speaker-1.jpg" alt="speaker">
       <div class="media-body">
        <h4 class="mt-0">{{speaker.name}}</h4>
        {{speaker.position}}
       </div>
      </div>
     </div>
     <!-- border -->
     <div class="col-12 mt-4 order-4">
      <div class="border-bottom border-primary"></div>
     </div>
    </div>
   </div>
  </section>
  <!-- /event single -->

  <!-- more event -->
  <section class="section pt-0">
   <div class="container">
    <div class="row">
     <div class="col-12">
      <h2 class="section-title">Past Events</h2>
     </div>
    </div>
    <div class="row justify-content-start">
     <!-- event -->
     <template v-if="pastEvents.length >= 3">
      <div v-for="(n, i) in 3" :key="i" class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
       <div class="card border-0 rounded-0 hover-shadow">
        <div class="card-img position-relative">
         <img class="card-img-top rounded-0" src="images/events/event-1.jpg" alt="event thumb">
         <div class="card-date">
          <span>{{pastEvents[i].date.day}}</span><br>
          {{pastEvents[i].date.month}}-{{pastEvents[i].date.year}}
         </div>
        </div>
        <div class="card-body">
         <!-- location -->
         <p><i class="ti-location-pin text-primary mr-2"></i>{{pastEvents[i].venue}}</p>
         <a href="event-single.html"><h4 class="card-title">{{pastEvents[i].name}}</h4></a>
        </div>
       </div>
      </div>
     </template>
     <template v-else>
      <div v-for="(n, i) in pastEvents.length" :key="i" class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
       <div class="card border-0 rounded-0 hover-shadow">
        <div class="card-img position-relative">
         <img class="card-img-top rounded-0" src="/images/events/event-1.jpg" alt="event thumb">
         <div class="card-date">
          <span>{{pastEvents[i].date.day}}</span><br>
          {{pastEvents[i].date.month}}-{{pastEvents[i].date.year}}
         </div>
        </div>
        <div class="card-body">
         <!-- location -->
         <p><i class="ti-location-pin text-primary mr-2"></i>{{pastEvents[i].venue}}</p>
         <router-link :to="`/event/${i}`"><h4 class="card-title">{{pastEvents[i].name}}</h4></router-link>
        </div>
       </div>
      </div>
     </template>
    </div>
   </div>
  </section>
  <!-- /more event -->
  <!--footer-->
  <footer-section/>
  <!--/footer-->
 </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name      : 'Event',
  components: {},
  props     : [],
  data () {
    return {
      id       : this.$route.params.id,
      pageTitle: 'Events'
    }
  },
  methods   : {},
  computed  : {
    ...mapGetters('events', { events: 'events', pastEvents: 'pastEvents' }),
    ...mapGetters('events', { pastEvents: 'pastEvents' }),
    eventName () {
      return this.events[this.id].name
    }
  }
}
</script>

<style lang="scss" scoped>
 @import '../assets/styles/scss/mixins';
 @import '../assets/styles/scss/variables';

 .ti-check-box{
  color: $primary-color;
  font-weight: 600;
 }
 .section-title{
  margin-bottom: 20px;
  margin-left: 0;
  font-weight: lighter !important;
  color: $primary-color;
  @include desktop{
   margin-bottom: 20px !important;
  }
 }
 .abt-section{
  p{
   margin-left: 10px;
   margin-bottom: 25px;
   @include desktop{
    line-height: 2.2;
   }
  }
 }
</style>
