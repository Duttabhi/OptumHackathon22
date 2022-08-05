<template>
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg bg-primary fixed-top" id="mainNav">
        <div style="background-color:white;" class="container">
            <a style="color:#FF6600" class="navbar-brand" href="/">Optum</a>
            <button style="color:#FF612B" class="navbar-toggler text-uppercase font-weight-bold bg-primary rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" ><router-link style="color:#FF6600" to="/profile">Profile</router-link></a></li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" ><router-link style="color:#FF6600" to="/reports">Reports</router-link></a></li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded"><router-link style="color:#FF6600" to="/">Logout</router-link></a></li>
                </ul>
            </div>
        </div>
    </nav>
  <UserHead :msgHead="phytnessbody"></UserHead>
  <UserPortfolio></UserPortfolio>
  <AppFooter :msgFooter="phytnessfooter"></AppFooter>
  <AppCopyright :msgCopyright="phytnesscopyright"></AppCopyright>
  

</template>

<script>
import AppFooter from '../components/AppFooter.vue'
import AppCopyright from '../components/AppCopyright.vue'
import UserHead from '../components/UserHead.vue'
import UserPortfolio from '../components/UserPortfolio.vue'

export default {
  name: 'UserHome',
  components: {
    AppFooter,
    AppCopyright,
    UserHead,
    UserPortfolio,
}
}
</script>