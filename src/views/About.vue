<template>
  <div class="about">
    <!-- header -->
    <header-section/>
    <!-- /header -->
    <!-- page title -->
    <section class="page-title-section overlay" :v-css="{backgroundImage : '/images/backgrounds/page-title.jpg'}">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <ul class="list-inline custom-breadcrumb">
              <li class="list-inline-item"><a class="h2 text-primary font-secondary">{{pageTitle}}</a></li>
              <li class="list-inline-item text-white h3 font-secondary @@nasted"></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- /page title -->

    <!-- about -->

    <section class="section">
      <div class="container">
        <div class="row mb-lg-3">
          <div class="col-12">
            <h2 class="section-title h3 font-weight-bold">
              <i class="ti-home mb-xl-4 mb-lg-3 mb-4 feature-icon-small"></i> OUR JOURNY</h2>
            <p>Prima Academy is a mixed sex school located at Nii Okaiman, a suburb of Accra. It was founded in the year 1997 by the late Mrs Gladys Tettey – Akrofi an auditor by profession. It is registered under the Companies Code, 1963 (Act 179)
              The school which began in a wooden structure with 2 children (a boy and a girl) can now boost of five hundred and thirty seven (537) school children with forty six (46) members of staff.</p>
          </div>
        </div>

        <div class="row mb-lg-3">
          <div class="col-md-6 col-12">
            <h2 class="section-title h3 font-weight-bold">
              <i class="ti-rocket mb-xl-4 mb-lg-3 mb-4 feature-icon-small"></i> OUR MISSION</h2>
            <p>Our mission is to provide the opportunity for each child to reach his/her potential academically, socially, emotionally, spiritually within a happy and safe environment.</p>
          </div>
          <div class="col-md-6 col-12">
            <h2 class="section-title h3 font-weight-bold">
              <i class="ti-eye mb-xl-4 mb-lg-3 mb-4 feature-icon-small"></i> OUR VISION</h2>
            <p>Our vision is to Produce Responsible, Intellectual, and Matured achievers to sustain and develop the virtues of society.</p>
          </div>
        </div>
        <div class="row mb-lg-3">
          <div class="col-md-6 col-12">
            <h2 class="section-title h3 font-weight-bold"><i class="ti-hand-drag mb-xl-4 mb-lg-3 mb-4 feature-icon-small"></i>Core values</h2>
            <p>Integrity, Respect Excellence, Creativity, Teamwork, Perseverance, Justice, </p>
          </div>
        </div>
      </div>
    </section>
    <!-- /about -->

    <!-- funfacts -->
    <section class="section-sm bg-primary">
      <div class="container">
        <div class="row">
          <!-- funfacts item -->
          <div v-for="(fact, key) in funFacts" :key="key" class="col-md-3 col-sm-6 mb-4 mb-md-0">
            <div class="text-center">
              <h2 class="count text-white">
                <count-up v-if="typeof fact === 'number'" :to="fact"></count-up>
                <span v-else>{{fact}}</span>
              </h2>
              <h5 class="text-white">{{key.toString().toUpperCase()}}</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /funfacts -->

    <!-- success story -->
    <section class="section bg-cover" data-background="images/backgrounds/success-story.jpg">
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
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /success story -->

    <!-- banner-feature -->
    <section class="bg-gray">
      <div class="container-fluid p-0">
        <div class="row no-gutters">
          <div class="col-xl-4 col-lg-5 align-self-end">
          </div>
          <div class="col-xl-8 col-lg-7">
            <div class="row feature-blocks bg-gray justify-content-between">
              <div class="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                <i class="ti-home mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                <h3 class="mb-xl-4 mb-lg-3 mb-4">Facilities</h3>
                <ul class="list-styled mb-5">
                  <li v-for="(facility, i) in facilities" :key="i">{{facility}}</li>
                </ul>
              </div>
              <div class="col-sm-6 col-xl-5 mb-xl-5 mb-lg-3 mb-4 text-center text-sm-left">
                <i class="ti-user mb-xl-4 mb-lg-3 mb-4 feature-icon"></i>
                <h3 class="mb-xl-4 mb-lg-3 mb-4">Clubs</h3>
                <ul class="list-styled mb-5">
                  <li v-for="(club, i) in clubs" :key="i">{{club}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!--footer-->
    <footer-section />
    <!--/footer-->
  </div>
</template>

<script>
import CountUp from '../components/CountUp'
export default {
  name: "Newsletter",
  components : { CountUp },
  props : [],
  data () {
    return {
      pageTitle : 'About Us',
      funFacts : {
        students : 537,
        teachers : 46,
        subjects : 'All GES',
        Awards : 5
      },
      facilities : [
        'E-learning centre',
        '24/7 internet facility',
        'Conducive environment for  effective teaching',
        'School bus',
        'Mobile library'
      ],
      clubs: [
        'Debate club',
        'French club',
        'Drama club',
        'Prima dance club',
        'Cultural group'
      ]
    }
  },
  methods : {},
  computed : {}
}
</script>

<style lang="scss" scoped>

</style>
