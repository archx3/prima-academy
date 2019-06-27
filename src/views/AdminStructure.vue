<template>
 <div id='app-ad-s'>
  <!-- header -->
  <header-section :title="pageTitle"/>
  <!-- /header -->
  <!-- page title -->

  <page-title-section :page-title="pageTitle" :url="this.$route" :background="'/images/about/about-page-n.png'"/>
  <!-- /page title -->

  <!-- courses -->
  <section class="section">
   <div class="container">
    <div class="row justify-content-center">
     <!-- event -->
     <vue2-org-tree
      :data="organisationalStructure"
      :horizontal="horizontal"
      :collapsable="collapsable"
      :label-class-name="labelClassName"
      :render-content="renderContent"
      expand="expand"
      @on-expand="onExpand"
      @on-node-click="onNodeClick"
     ></vue2-org-tree>
    </div>
   </div>
  </section>
  <!-- /courses -->
  <!--footer-->
  <footer-section />
  <!--/footer-->
 </div>
</template>

<script>
import Vue from 'vue';
import Vue2OrgTree from 'vue2-org-tree'

Vue.use(Vue2OrgTree)

export default {
  name: "AdminStructure",
  components : {
    Vue2OrgTree
  },
  props : [],
  data () {
    return {
      pageTitle : 'Administrative Structure',
      organisationalStructure : {
        id: 0,
        label: 'C.E.O',
        expand : true,
        children: [{
          id: 2,
          label: 'Director of Administration',
          expand : true,
          children: [{
            id: 21,
            label: 'Headmaster'
          }, {
            id: 22,
            label: 'Supervisor'
          }],
        }, {
          id: 3,
          label: 'Director of Academics',
          expand : true,
          children: [{
            id: 31,
            label: 'Coordinator'
          }, {
            id: 32,
            label: 'Teaching Staff',
            children : [
              {
                id: 321,
                label: 'Prefects',
              },
              {
                id: 322,
                label: 'Students',
              },
            ]
          }]
        }]
      },
      horizontal: false,
      collapsable: true,
      expandAll: false,
      labelClassName: 'bg-orange'
    }
  },
  methods :  {
    renderContent: function (h, data) {
      return data.label
    },
    onExpand: function (data) {
      if ('expand' in data) {
        data.expand = !data.expand

        if (!data.expand && data.children) {
          this.collapse(data.children)
        }
      } else {
        this.$set(data, 'expand', true)
      }
    },
    onNodeClick: function (e, data) {
      alert(data.label)
    },
    collapse: function (list) {
      var _this = this
      list.forEach(function (child) {
        if (child.expand) {
          child.expand = false
        }

        child.children && _this.collapse(child.children)
      })
    },
    expandChange: function () {
      this.toggleExpand(this.data, this.expandAll)
    },
    toggleExpand: function (data, val) {
      var _this = this
      if (Array.isArray(data)) {
        data.forEach(function (item) {
          _this.$set(item, 'expand', val)
          if (item.children) {
            _this.toggleExpand(item.children, val)
          }
        })
      } else {
        this.$set(data, 'expand', val)
        if (data.children) {
          _this.toggleExpand(data.children, val)
        }
      }
    }
  },
  computed : {}
}
</script>

<style lang="scss">
 @import "../assets/styles/scss/_variables.scss";
 .bg-orange{
  background-color: $primary-color;
 }
</style>
