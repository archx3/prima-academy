<template>
   <span v-text="count"></span>
</template>

<script>
import inViewPort from 'in-viewport'
export default {
  name: "count-up",
  components : {},
  props : ['to'],
  data () {
    return {
      count : 0,
      interval : null
    }
  },
  methods : {
    tick () {
      let nextCount = this.count + this.increment;

      if (nextCount >= this.to) {
        this.count = this.to;

        return clearInterval(this.interval);
      }
      return (this.count += this.increment);
    }
  },
  computed : {
    increment : function ()
    {
      return Math.ceil(this.to / 25)
    }
  },
  mounted () {
    inViewPort(this.$el, () => {
      setInterval(this.tick, 20);
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
