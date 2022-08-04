<template>
  <AppHeader :msgHeader="phytnessheader"></AppHeader>
  <AppHead :msgHead="phytnessbody"></AppHead>
  <AppFooter :msgFooter="phytnessfooter"></AppFooter>
  <AppCopyright :msgCopyright="phytnesscopyright"></AppCopyright>

</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import AppCopyright from '../components/AppCopyright.vue'
import AppHead from '../components/AppHead.vue'

export default {
  name: 'HomeVue',
  components: {
    AppHeader,
    AppFooter,
    AppCopyright,
    AppHead,
}
}
</script>