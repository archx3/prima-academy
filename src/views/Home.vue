<template>
 <div id="home" class="home" v-once>
  <!-- header -->
  <header-section/>
  <!-- /header -->
  <!-- hero slider -->
  <!--        <section class="overlay hero-section bg-cover">-->
  <section class="overlay">
   <carousel :autoPlay="true" :perPage="1" paginationActiveColor="#ff8700"
             paginationColor="#fff212" :paginationPadding="5">
    <slide class="text-center overflow-hidden">
     <div class="overlay hero-section bg-cover" v-background="'/images/banner/banner-1.jpg'">
      <div class="container">
       <div class="hero-slider">
        <!-- slider item -->
        <div class="hero-slider-item">
         <div class="row">
          <div class="col-md-8 text-left">
           <transition></transition>
           <h1 class="text-white" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3"
               data-animation-in="fadeInLeft" data-delay-in=".1">{{info.name}}</h1>
           <p class="text-muted mb-4" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3"
              data-animation-in="fadeInLeft" data-delay-in=".4">Our motto: <span class="font-weight-bold">{{info.motto}}</span>,
            propels the pupils and students to rise and shine
            wherever they find themselves, to excel in the classroom, perform on stage and succeed on the playing field.</p>
           <a href="#" class="btn btn-primary" data-animation-out="fadeOutRight" data-delay-out="5"
              data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".7">Enroll now</a>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </slide>
     <slide class="text-center overflow-hidden">
     <div class="overlay hero-section bg-cover" v-background="'/images/gallery/graduation-2018/D2470042.JPG'">
      <div class="container">
       <div class="hero-slider">
        <!-- slider item -->
        <div class="hero-slider-item">
         <div class="row">
          <div class="col-md-8 text-left">
           <transition></transition>
            <h1 class="text-white" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3"
               data-animation-in="fadeInLeft" data-delay-in=".1">Teaching Staff</h1>
           <p class="text-muted mb-4" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3"
              data-animation-in="fadeInLeft" data-delay-in=".4">We're proud of Our awesome teachers who work hard to deliver good classroom content week in, week out.</p>
           <router-link to="/gallery/2/graduation 2018" class="btn btn-primary" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".7">See More..</router-link>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </slide>
     <slide class="text-center overflow-hidden">
       <div class="overlay hero-section bg-cover" v-background="'/images/gallery/graduation-2018/D2470016.JPG'">
         <div class="container">
           <div class="hero-slider">
             <!-- slider item -->
             <div class="hero-slider-item">
               <div class="row">
                 <div class="col-md-8 text-left">
                   <transition></transition>
                   <h1 class="text-white" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3"
                       data-animation-in="fadeInLeft" data-delay-in=".1">Graduation 2018</h1>
                   <p class="text-muted mb-4" data-animation-out="fadeOutRight" data-delay-out="5" data-duration-in=".3"
                      data-animation-in="fadeInLeft" data-delay-in=".4">Every year, Our graduating students are seen off in style, and 2018 was no exception.</p>
                   <router-link to="/gallery/2/graduation 2018" class="btn btn-primary" data-animation-out="fadeOutRight" data-delay-out="5"
                                data-duration-in=".3" data-animation-in="fadeInLeft" data-delay-in=".7">See What Happened</router-link>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </slide>
   </carousel>
  </section>

  <!-- /hero slider -->

  <!-- banner-feature -->
  <section class="bg-gray">
   <div class="container-fluid p-0">
    <div class="row no-gutters">
     <div class="col-xl-4 col-lg-5 align-self-end">
      <img class="img-fluid w-100" src="/images/banner/banner-feature-n.png" alt="banner-feature">
     </div>
     <div class="col-xl-8 col-lg-7">
      <div class="row feature-blocks bg-gray justify-content-between">
       <div class="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
        <i class="ti-book mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
        <h3 class="mb-xl-4 mb-lg-3 mb-4">Scholorship News</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
         et dolore magna aliqua. Ut enim ad</p>
       </div>
       <div class="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
        <i class="ti-blackboard mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
        <h3 class="mb-xl-4 mb-lg-3 mb-4">Our Notice Board</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
         et dolore magna aliqua. Ut enim ad</p>
       </div>
       <div class="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
        <i class="ti-agenda mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
        <h3 class="mb-xl-4 mb-lg-3 mb-4">Our Achievements</h3>
        <ul class="mb-5 p-0">
         <li v-for="(achievement, i) in achievements" :key="i">
          <p>
           <i class="ti-gift mb-xl-4 mb-lg-3 mb-4 clr-pri" style="font-size: 20px;"></i>
           {{achievement.event}} <br>
           <span class="font-weight-bold">{{achievement.award}}</span>
          </p>
         </li>
        </ul>
       </div>
       <div class="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
        <i class="ti-write mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
        <h3 class="mb-xl-4 mb-lg-3 mb-4">Admission Now</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
         et dolore magna aliqua. Ut enim ad</p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
  <!-- /banner-feature -->

  <!-- about us -->
  <section class="section">
   <div class="container">
    <div class="row align-items-center">
     <div class="col-md-6 order-2 order-md-1">
      <h2 class="section-title">About The School</h2>
      <p>Prima Academy is a mixed sex school located at Nii Okaiman, a suburb of Accra. It was founded in the year 1997 by the late Mrs
       Gladys Tettey – Akrofi an auditor by profession. It is registered under the Companies Code, 1963 (Act 179)
       The school which began in a wooden structure with 2 children (a boy and a girl) can now boost of five hundred and thirty seven
       (537) school children with forty six (46) members of staff.</p>
      <router-link to="/about" class="btn btn-primary-outline">Learn more</router-link>
     </div>
     <div class="col-md-6 order-1 order-md-2 mb-4 mb-md-0">
      <img class="img-fluid w-100" src="/images/about/about-us.png" alt="about image">
     </div>
    </div>
   </div>
  </section>
  <!-- /about us -->

  <!-- Academic sections-->
  <academic-sections/>

  <!-- success story -->
  <section class="section bg-cover" v-background="'images/backgrounds/success-story.jpg'">
   <div class="container">
    <div class="row">
     <div class="col-lg-6 col-sm-4 position-relative success-video">
      <a class="play-btn venobox" href="https://youtu.be/nA1Aqp0sPQo" data-vbtype="video">
       <i class="ti-control-play"></i>
      </a>
     </div>
     <div class="col-lg-6 col-sm-8">
      <div class="bg-white p-5">
       <h2 class="section-title">Success Stories</h2>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
      </div>
     </div>
    </div>
   </div>
  </section>
  <!-- /success story -->

  <!-- cta -->
  <section class="section bg-primary">
   <div class="container">
    <div class="row">
     <div class="col-12 text-center">
      <h2 class="section-title text-white mb-0">{{info.motto}}!</h2>
      <h6 class="text-white font-secondary">Click to share in the success stories</h6>
      <a href="contact.html" class="btn btn-secondary">Enroll now</a>
     </div>
    </div>
   </div>
  </section>
  <!-- /cta -->

  <!-- events -->
  <section class="section bg-gray">
   <div class="container">
    <div class="row">
     <div class="col-12">
      <div class="d-flex align-items-center section-title justify-content-between">
       <h2 class="mb-0 text-nowrap mr-3">Upcoming Events</h2>
       <div class="border-top w-100 border-primary d-none d-sm-block"></div>
       <div>
        <a href="/events" class="btn btn-sm btn-primary-outline ml-sm-3 d-none d-sm-block">see all</a>
       </div>
      </div>
     </div>
    </div>
    <div class="row justify-content-center">
     <!-- event -->
     <div v-for="(n, i) in 3" :key="i" class="col-lg-4 col-sm-6 mb-5 mb-lg-0">
      <div class="card border-0 rounded-0 hover-shadow">
       <div class="card-img position-relative">
        <img class="card-img-top rounded-0" src="images/events/event-1.jpg" alt="event thumb">
        <div class="card-date"><span>{{events[i].date.day}}</span><br>{{events[i].date.month}}</div>
       </div>
       <div class="card-body">
        <!-- location -->
        <p><i class="ti-location-pin text-primary mr-2"></i>{{events[i].venue}}</p>
        <router-link :to="`/event/${i}`"><h4 class="card-title">{{events[i].name}}</h4></router-link>
       </div>
      </div>
     </div>
    </div>
    <!-- mobile see all button -->
    <div class="row">
     <div class="col-12 text-center">
      <a href="course.html" class="btn btn-sm btn-primary-outline d-sm-none d-inline-block">sell all</a>
     </div>
    </div>
   </div>
  </section>
  <!-- /events -->

  <footer-section/>
 </div>
</template>
<script>
// @ is an alias to /src
// import HelloWorld from '../components/HelloWorld.vue'

import { mapGetters }      from 'vuex';
import AcademicSections    from '../components/AcademicSections'
import { Slide, Carousel } from 'vue-carousel'

export default {
  name      : 'home',
  components: {
    AcademicSections, Slide, Carousel
  },
  directives: {
    css: {
      bind (el, binding, vnode) {
        console.log(binding.value);
        for (let property in binding.value) {
          console.log('here');
          if (binding.value.hasOwnProperty(property)) {
            console.log('ogbongbo');
            el.style[property] = binding.value[property];
          }
        }
      }
    }
  },
  data () {
    return {
      currentYear : new Date().getFullYear(),
      achievements: [
        {
          event: 'National inter- basic schools debate competition, May 2011',
          award: 'first runner up',
        },
        {
          event: 'Inter – private schools quiz competition',
          award: 'Second place',
        },
        {
          event: 'Tv3 talented kids (Frederick Frimpong & Ruth Amofa)',
          award: 'Both finalist',
        },
        {
          event: 'Mezzo maths trophy',
          award: 'Excellent Performance Award',
        },
      ]
    }
  },
  computed  : {
    ...mapGetters('school', { info: 'info', academicSections: 'academicSections' }),
    ...mapGetters('address', { address: 'all' }),
    ...mapGetters('events', { events: 'events' }),
  },
  methods   : {},
  mounted () {
    // var $ = jQuery;
    // window.$ = $;
  }
}
</script>
<style lang="scss">
  .VueCarousel-slide {
    cursor: url('../assets/images/drag.png') 16 9, ew-resize !important;

    p, h1, h2, h3, h4, h5, h6 {
      user-select: none;
    }
  }
  .VueCarousel-pagination {
    position: absolute;
    bottom: 150px;
  }
  .VueCarousel-dot-container{
   padding: 5px 30px !important;
   border: 1px solid #fff;
   border-radius: 28px;

   .VueCarousel-dot{
    margin-top: 0 !important;
   }
  }
</style>
<style lang="scss">

 .cur-ptr {
  cursor: pointer;
 }
</style>
