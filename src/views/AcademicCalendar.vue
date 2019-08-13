<template>
 <div id='app-acc'>
  <!-- header -->
  <header-section :title="pageTitle"/>
  <!-- /header -->
  <!-- page title -->
  <page-title-section :page-title="pageTitle" :url="this.$route" :background="'https://primaca.sirv.com/Images/about/about-page-n.png'"/>
  <!-- /page title -->
  <section class="section-sm">
   <div class="container">
    <div class="row">
     <section class="timeline">
      <ul>
       <li v-for="(info, index) in calendarData" v-bind:key="index">
        <span></span>
        <div class="font-weight-bold">{{ info.title }}</div>
        <p>{{ info.description }}</p>
        <div>{{ info.location }}</div>
        <div class="badge-pill d-inline-block bg-primary">{{ info.label }}</div>
        <div class="year">
         <span>{{ info.endDate }}</span>
         <span>{{ info.startDate }}</span>
        </div>
       </li>
      </ul>
     </section>
    </div>
   </div>
  </section>
  <!--footer-->
  <footer-section/>
  <!--/footer-->
 </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name      : 'AcademicCalendar',
  components: {},
  props     : [],
  data () {
    return {
      pageTitle: 'Academic Calendar',
      timeline_data: [
        {
          startDate : "2009",
          endDate : "2014",
          title : "Ateneo de Davao University",
          label : "BS in Information Technology",
          description : "Ateneo de Davao University",
          location : "Roxas Ave, Poblacion District, Davao City"
        },
      ]
    }
  },
  computed  : {
    ...mapGetters('calendar', { calendarData : 'cal' })
  },
  methods   : {
  },
}
</script>

<style lang="scss" scoped>
 @import '../assets/styles/scss/mixins';
 @import '../assets/styles/scss/variables';
 $font-color: $prima-orange;
 $bg-color: $prima-orange;
 $dark-blue: #fff;
 $light-blue: #fff;

 @mixin clearfix {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
 }

 @mixin set-border($thickness, $color, $radius) {
  border: $thickness solid $color;
  border-radius: $radius;
 }

 .timeline {
  padding: 5px 85px;

  ul {
   position: relative;

   &::before {
    @include clearfix();
    height: 100%;
   }
  }

  li {
   position: relative;
   margin: 100px 35px;
   width: 100%;
   list-style: none;
   line-height: 25px;
   margin-top: 30px;

   & > span {
    @include clearfix();
    left: -25px;
    height: 125%;
    @include set-border(2px, $prima-orange, none);
   }

   & > span::before, & > span::after {
    @include clearfix();
    width: 14px;
    height: 14px;
    @include set-border(3px, $prima-orange, 50%);
    left: -7px;
    background: $light-blue;
   }

   & > span::before {
    top: -15px;
   }

   & > span::after {
    top: 100%;
   }

   div {
    &:nth-child(2) {
     font-size: 1.2em;
    }

    &:nth-child(3), &:nth-child(4) {
     font-size: 1em;
     font-style: italic;
     color: darken($font-color, 25%);
    }
   }

   .year span {
    position: absolute;
    font-size: 1em;
    left: -125px;
    width: 80px;
    text-align: right;

    &:first-child {
     top: -20px;
    }

    &:last-child {
     top: 85%;
    }
   }
  }
 }
</style>
