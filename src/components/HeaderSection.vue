<template>
 <header class="fixed-top header">
  <!-- top header -->
  <div class="top-header py-2 bg-white" :class="{hide : activateShortNav}">
   <div class="container">
    <div class="row no-gutters">
     <div class="col-lg-4 text-center text-lg-left">
      <strong>CALL &nbsp;</strong>
      <a class="text-color mr-3" :href="`callto:${phones[0]}`">
       <span>{{phones[0]}}</span>
      </a>
      <!--<a v-for="(phone, index) in phones" :key="index" class="text-color mr-3" :href="`callto:${phones}`">
       <span>{{phone}}</span>
      </a>-->
      <ul class="list-inline d-inline">
       <li class="list-inline-item mx-0">
        <a class="d-inline-block p-2 text-color" href="https://web.facebook.com/prima.aca"><i class="ti-facebook"></i></a>
       </li>
<!--       <li class="list-inline-item mx-0"><a class="d-inline-block p-2 text-color" href="#"><i class="ti-twitter-alt"></i></a></li>-->
<!--       <li class="list-inline-item mx-0"><a class="d-inline-block p-2 text-color" href="#"><i class="ti-linkedin"></i></a></li>-->
<!--       <li class="list-inline-item mx-0"><a class="d-inline-block p-2 text-color" href="#"><i class="ti-instagram"></i></a></li>-->
      </ul>
     </div>
     <div class="col-lg-8 text-center text-lg-right">
      <ul class="list-inline">
       <li class="list-inline-item">
        <a class="text-uppercase btn-primary text-color p-sm-2 py-2 px-0 d-inline-block" href="#" data-toggle="modal"
           data-target="#loginModal">login to Portal</a>
       </li>
       <li class="list-inline-item">
        <a class="text-uppercase btn-primary text-color p-sm-2 py-2 px-0 d-inline-block" href="https://drive.google.com/uc?id=15sG8oVh3pbwgz2hh8C0xsG2BdJn3tQn2&export=download" data-toggle="modal"
           data-target="#signupModal">Enroll</a>
       </li>
      </ul>
     </div>
    </div>
   </div>
  </div>
  <!-- navbar -->
  <div class="navigation w-100 nav-gb" :class="{'nav-bg' : activateShortNav}">
   <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light p-0">
     <a class="navbar-brand d-flex" href="/">
       <img src="/images/prima-logo.png" alt="logo">
      <h2 class="section-title d-inline"><span class="text-white">Prima</span><span class="clr-pri"> Academy</span></h2>
     </a>
     <!--collapsing-->
     <button class="navbar-toggler rounded-0" :class="{collapsed : !mobNav}" @click="mobNav = !mobNav"
             type="button" data-toggle="collapse" data-target="#navigation"
             aria-controls="navigation" :aria-expanded="mobNav" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
     </button>
     <transition name="collapsing">
     <div v-show="mobNav" class="collapse navbar-collapse" :class="{show : mobNav}" id="navigation">
      <ul class="navbar-nav ml-auto text-center">
       <li v-for="(link, index) in navLinks" :key="index" class="nav-item"
           :class="{active : activeLink === link.title, 'dropdown view' : link.children !== undefined}">
        <router-link class="nav-link" :to="link.target">
         {{link.title}} <span v-if="link.children" class="ti-angle-down"></span>
        </router-link>

        <div v-if="link.children !== undefined" class="dropdown-menu show" aria-labelledby="navbarDropdown">
         <router-link v-for="(childLink, childIndex) in link.children" :key="childIndex"
            class="dropdown-item" :to="childLink.target">{{childLink.title}}</router-link>
        </div>
       </li>
       <li v-for="(link, index) in extLinks" :key="link.title + index" class="nav-item"
           :class="{active : activeLink === link.title}">
        <a class="nav-link" :href="link.target">{{link.title}}</a>
       </li>
      </ul>
     </div>
     </transition>
    </nav>
   </div>
  </div>
 </header>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  name    : 'header-section',
  props : {
    title : {
      default : ''
    }
  },
  data () {
    return {
      activateShortNav: false,
      navLinks           : [
        {
          title   : 'School',
          target  : '#',
          children: [
            {
              title : 'About',
              target: '/about'
            },
            {
              title : 'Admin Structure',
              target: '/adminstructure'
            },
            {
              title : 'Management Team',
              target: '/management'
            }
          ]
        },
        {
          title   : 'Information',
          target  : '#',
          children: [
           /* {
              title : 'Class Timetables',
              target: '#'
            }, */
            {
              title : 'Events',
              target: '/events'
            },
            {
              title : 'Newsletter',
              target: '/newsletter'
            },
            {
              title : 'Academic Calendar',
              target: '/calendar'
            },
            /* {
              title : 'e School Report',
              target: '#'
            }, */
          ]
        },
        {
          title : 'Gallery',
          target: '/gallery',
        },
      ],
      extLinks : [
        {
          title : 'Admissions',
          target: 'https://drive.google.com/uc?id=15sG8oVh3pbwgz2hh8C0xsG2BdJn3tQn2&export=download',
        },
      ],
      activeLink : '',
      mobNav : false
    }
  },
  computed: {
    ...mapGetters('address', { phones: 'phones', socialMedia: 'socialMedia' }),
    ...mapGetters('school', { school: 'info' }),
  },
  methods : {
    handleNavScroll: function () {
      if (window.scrollY >= 50 && !this.activateShortNav) {
        this.activateShortNav = true;
      } else if (window.scrollY < 50 && this.activateShortNav) {
        this.activateShortNav = false;
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleNavScroll);
    console.log(document.title, 'dtt', this.title);
    if (this.title) { document.title += ` | ${this.title}` }
  }
}
</script>
<style lang="scss">
 .collapsing{
  position:relative;
  height:0;
  overflow:hidden;
  transition:height .35s ease
 }
 .collapsing-enter-active, .collapsing-leave-active {
  transition:height .35s ease
 }
 .collapsing-enter, .collapsing-leave-to /* .fade-leave-active below version 2.1.8 */ {
  height:0;
 }
 h2.section-title{
  margin: auto;
  margin-left: 10px;
 }
</style>
