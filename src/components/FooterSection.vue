<template>
 <footer>
  <!-- newsletter -->
  <div class="newsletter" v-if="subscribe">
   <div class="container">
    <div class="row">
     <div class="col-md-9 ml-auto bg-primary py-5 newsletter-block">
      <h3 class="text-white">Subscribe Now</h3>
      <form action="#">
       <div class="input-wrapper">
        <input type="email" class="form-control border-0" id="newsletter" name="newsletter" placeholder="Enter Your Email...">
        <button type="submit" value="send" class="btn btn-primary">Join</button>
       </div>
      </form>
     </div>
    </div>
   </div>
  </div>
  <!-- footer content -->
  <div class="footer bg-footer section border-bottom">
   <div class="container">
    <div class="row">
     <div class="col-lg-4 col-sm-8 mb-5 mb-lg-0">
      <!-- logo -->
      <router-link class="logo-footer  mb-4" to="/">
       <img class="img-fluid" src="/images/prima-logo.png" alt="logo">
       <h4 class="text-white ml-2 mb-0 d-inline"><span class="text-white">Prima</span><span class="clr-pri"> Academy</span></h4>
      </router-link>
      <ul class="list-unstyled">
       <li class="mb-2">{{address.location}}</li>
       <li class="mb-2">{{address.phones[0]}}</li>
       <li class="mb-2">{{address.phones[1]}}</li>
       <li class="mb-2">{{address.email}}</li>
      </ul>
     </div>
     <!-- company -->
     <div class="col-lg-4 col-md-4 col-sm-4 col-6 mb-5 mb-md-0 text-center">
      <h4 class="text-white mb-5">SCHOOL</h4>
      <ul class="list-unstyled">
       <li class="mb-3"><a class="text-color" href="/#about">About Us</a></li>
       <li class="mb-3"><router-link class="text-color" to="/management">Management</router-link></li>
       <li class="mb-3"><router-link class="text-color" to="#">Contact</router-link></li>
       <li class="mb-3"><router-link class="text-color" to="/events">Events</router-link></li>
      </ul>
     </div>
     <!-- links -->
     <div class="col-lg-4 col-md-4 col-sm-4 col-6 mb-5 mb-md-0 text-center">
      <h4 class="text-white mb-5">LINKS</h4>
      <ul class="list-unstyled">
       <li class="mb-3"><router-link class="text-color" to="/newsletter">Newsletter</router-link></li>
       <li class="mb-3"><router-link class="text-color" to="#">E School Report</router-link></li>
       <li class="mb-3"><router-link class="text-color" to="/calendar">Academic Calendar</router-link></li>
<!--       <li class="mb-3"><router-link class="text-color" to="#">FAQs</router-link></li>-->
      </ul>
     </div>
    </div>
   </div>
  </div>
  <!-- copyright -->
  <div class="copyright py-4 bg-footer">
   <div class="container">
    <div class="row">
     <div class="col-sm-7 text-sm-left text-center">
      <p class="mb-0">Copyright {{school.name}} © {{year}} All Rights Reserved.</p>
     </div>
     <div class="col-sm-5 text-sm-right text-center">
      <ul class="list-inline">
       <li class="list-inline-item"><a class="d-inline-block p-2" href="https://web.facebook.com/prima.aca">
        <i class="ti-facebook text-primary"></i></a>
       </li>
       <!--<li class="list-inline-item"><a class="d-inline-block p-2" href="#">
        <i class="ti-twitter-alt text-primary"></i></a>
       </li>
       <li class="list-inline-item"><a class="d-inline-block p-2" href="#">
        <i class="ti-instagram text-primary"></i></a>
       </li>-->
      </ul>
     </div>
    </div>
   </div>
  </div>
 </footer>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'footer-section',
  props : {
    subscribe : {
      default : false
    }
  },
  data () {
    return {
      year : new Date().getFullYear()
    }
  },
  computed : {
    ...mapGetters('address', { address : 'all' }),
    ...mapGetters('school', { school: 'info' }),
  }
}
</script>
