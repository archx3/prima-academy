<template>
 <div id='app-'>
  <!-- header -->
  <header-section :title="pageTitle"/>
  <!-- /header -->
  <!-- page title -->
  <page-title-section :page-title="pageTitle" :url="this.$route" :background="'/images/about/about-page-n.png'"/>
  <!-- /page title -->

  <!-- notice details -->
  <section class="section">
   <div class="container">
    <div class="row">
     <div class="col-12">
      <div class="d-flex">
       <div class="text-center mr-4">
        <div class="p-4 bg-primary text-white">
         <span class="h2 d-block">05</span> APR,2019
        </div>
       </div>
       <!-- notice content -->
       <div>
        <p class="font-italic">All praises to God! The second term of the  2018/19 academic year has successfully come to an end.
         We wish to bring to your notice the following:</p>

        <h3 class="mb-4">VACATION AND RE-OPENING</h3>
        <p>School breaks today, Friday 5th April , 2019, bringing the second term to an end. School will resume on Tuesday 7th May,2019 to commence the third term of the academic year.</p>

        <h3 class="mb-4">FEES</h3>
        <p>The school fees remains the same and feeding fees are unchanged . That is GH3 cedis across board . It should however be noted that the cost of books for 2018-2019 academic year has been split into three parts and included in the fees for next term .</p>

        <h3 class="mb-4">HEALTH INSPECTION</h3>
        <p>Children below five years of age in the school were examined by nurses from Ga Central Municipal Health Directorate. Older students were taken through best health practices such as handwashing , brushing of teeth etc.</p>

        <h3 class="mb-4">PENS AND PLASTICS</h3>
        <p>Prima was selected as one of 27 schools selected from the Greater Accra Region by Pens and Plastics of North Industrial area to participate in their programme.</p>

        <h3 class="mb-4">GA CENTRAL EXCELLENCE AWARD</h3>
        <p>The school received an award for best performance category in the Ga Central Municipal Assembly the 2018 BECE result. Also Miss Rosemond Naa Kormeokor Abbey now at Holy Child Senior High School also received award for best performance in the 2018 BECE.</p>

        <h3 class="mb-4">NADMO</h3>
        <p>Officials from GA CENTRAL municipal directorate of NADMO were in the school to sensitized the children on good practices in avoiding disasters such as flood , fire and other forms of natural disasters.</p>

        <h3 class="mb-4">RED CROSS SOCIETY</h3>
        <p>Officials from the ‘Red Cross Society’ of Ghana were also here to educate the children on the kind of first aid to be given to victims of any injury. Currently, some of the students are having fortnight training on the first aids.</p>

        <h3 class="mb-4">EXCURSION</h3>
        <p>Due to technical issues at Ghana Railways, the planned excursion did not come. However, we are hopeful that things will rectified and the excursion will come on next term</p>

        <h3 class="mb-4">GENERAL DRESS CODE</h3>
        <p class="font-italic">The following dress code must be strictly adhered to by parents.</p>
        <ul class="list-styled mb-5">
         <li><span class="font-weight-bold">Mondays, Tuesday, Thursdays:</span>
          Prescribed school uniform with white socks and black shoe to match.</li>
         <li><span class="font-weight-bold">Wednesday</span>: Blue,  black jeans with Prima orange polo shirt and black shoes with white socks to match.<br>
          Under special circumstance and permission from administration , long black skirts can be worn by older female students.</li>
         <li><span class="font-weight-bold">Friday</span>: On Fridays, the Friday wear with an optional footwear (a pair of shoe , sandals or snickers) excluding the rubber footwear.</li>
        </ul>

        <h3 class="mb-4">HAIRCUT</h3>
        <p>All Prima school children must have a down cut devoid of any style, stylish marks or patterns. (eg .Galas ,Punk ,fading etc.) the female children can wear of plait corn roll aged and stud earring are prescribed for the female students across board. All children with unprescribed haircut will be sent home.</p>

        <h3 class="mb-4">ACADEMIC INTERVENTION</h3>
        <p>As part of efforts to raise academic standard and standardize academic performance, the school is putting in place Interventive measure to help students with academic challenges. This will be in the form of a one  hour after school special remedial. Parents of such students will be invited at the beginning of the term.</p>

        <!--<h3 class="mb-4"></h3>
        <p></p>-->
        <a href="#" class="btn btn-primary">Download</a>
       </div>
      </div>
     </div>
    </div>
   </div>
  </section>
  <!-- /notice details -->
  <!--footer-->
  <footer-section />
  <!--/footer-->
 </div>
</template>

<script>
export default {
  name: "Newsletter",
  components : {},
  props : [],
  data () {
    return {
      pageTitle : 'Newsletter'
    }
  },
  methods : {},
  computed : {}
}
</script>

<style lang="scss" scoped>

</style>
