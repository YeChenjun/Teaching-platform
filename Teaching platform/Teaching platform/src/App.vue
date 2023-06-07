<template>
  <div>
    <background></background>
    <DaoHang></DaoHang>
<!--    <privateWeb></privateWeb>-->
    <div>{{this.$store.state.count}}</div>
  </div>

</template>

<script>

export default {
  name: 'App'

}
</script>

<style>
    body {
        margin: 0;
        padding: 0;
    }
</style>
