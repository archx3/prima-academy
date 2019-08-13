<template>
  <div class="about">
    <!-- header -->
    <header-section :title="pageTitle"/>
    <!-- /header -->
    <!-- page title -->
   <page-title-section :page-title="pageTitle" :url="this.$route" :background="'https://primaca.sirv.com/Images/about/about-page-n.png'"/>
    <!-- /page title -->
    <!-- about -->
   <section class="section abt-section">
      <div class="container">
        <div class="row mb-lg-3">
          <div class="col-12">
            <h2 class="section-title h3 font-weight-bold">
              <i class="ti-home mb-xl-4 mb-lg-3 mb-4 feature-icon-small vertical-align-middle"></i> OUR JOURNEY</h2>
            <p class="lh2">Prima Academy is a mixed sex school located at Nii Okaiman, a suburb of Accra. It was founded in the year 1997 by the late Mrs Gladys Tettey – Akrofi an auditor by profession. It is registered under the Companies Code, 1963 (Act 179).
              The school which began in a wooden structure with 2 children (a boy and a girl), but can now boast of five hundred and thirty seven (537) school children with forty six (46) members of staff.</p>
          </div>
        </div>

        <div class="row mb-lg-3">
          <div class="col-12">
            <h2 class="section-title h3 font-weight-bold">
              <i class="ti-rocket mb-xl-4 mb-lg-3 mb-4 feature-icon-small vertical-align-middle"></i> MISSION</h2>
            <p>Our mission is to provide the opportunity for each child to reach his/her potential academically, socially, emotionally, spiritually within a happy and safe environment.</p>
          </div>
        </div>
        <div class="row mb-lg-3">
          <div class="col-12">
            <h2 class="section-title h3 font-weight-bold">
              <i class="ti-eye mb-xl-4 mb-lg-3 mb-4 feature-icon-small vertical-align-middle"></i> VISION</h2>
            <p>Our vision is to Produce Responsible, Intellectual, and Matured achievers to sustain and develop the virtues of society.</p>
          </div>
        </div>
        <div class="row mb-lg-3">
          <div class="col-md-6 col-12">
            <h2 class="section-title h3 font-weight-bold"><i class="ti-hand-drag mb-xl-4 mb-lg-3 mb-4 feature-icon-small"></i>Core values</h2>
            <p v-for="(value, v) in coreValues" :key="v">
              <i class="ti-check-box mb-xl-4 mb-lg-3 mb-4 "></i> {{value}}
            </p>
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
                <count-up v-if="typeof fact === 'number'" :endAt="fact"></count-up>
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
              <p>Like most kids out there, young as I was, I couldn't clearly pin point a career path fit for me.</p>
              <p>Joining Prima Academy gave me the opportunity to widen my knowledge about potential career paths and and ended-up gingering my interest in Technology and engineering.</p>
              <p>Joining the Tech Club in particular dispelled a notion I had, that tech products were results of magic. Now more than ever, I have mustered great interest in beig a computer engineer one day, in line with modern career trends and the overall shift towards automation</p>
              <p class="font-italic ">Nana Antwi Boasiako, Class of 2014</p>
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
      ],
      coreValues : ['Integrity', 'Respect', 'Excellence', 'Teamwork', 'Perseverance']
    }
  },
  methods : {},
  computed : {}
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
    font-weight: lighter !important;
    @include desktop{
      margin-bottom: 20px !important;
    }
  }
  .abt-section{
    p{
      font-size: 21px;
      margin-left: 10px;
      margin-bottom: 25px;
      @include desktop{
        line-height: 2.2;
      }
      @include mobile{
        line-height: 1.7;
      }
    }
  }
</style>
