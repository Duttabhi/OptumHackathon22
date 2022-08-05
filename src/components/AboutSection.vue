<template>
        <AppHeader></AppHeader>
           <!-- About Section-->
        <section class="page-section bg-primary text-white mb-0" id="about">
            <div class="container">
                <!-- About Section Heading-->
                <h3 style="color:#FF612B;" class="page-section-heading text-center text-uppercase">About</h3>
                <!-- Icon Divider-->
                <div class="divider-custom divider-light">
                    <div  class="divider-custom-icon"><i class="fas fa-circle"></i></div>
                    <div   class="divider-custom-icon"><i class="far fa-circle"></i></div>
                    <div  class="divider-custom-icon"><i class="fas fa-circle"></i></div>
                    <div   class="divider-custom-icon"><i class="far fa-circle"></i></div>
                    <div  class="divider-custom-icon"><i class="fas fa-circle"></i></div> 
                </div>
                <!-- About Section Content-->
                <div class="row">
                    <div style="color:black" class="col-lg-4 ms-auto"><p class="lead">We are working on AI project to provide you the curated list of wellness options so that you can mange your chronic disease.</p></div>
                    <div style="color:black" class="col-lg-4 me-auto"><p class="lead">Our Team includes Mahesh, Uvika, Prerna, Ishita and Abhishek. The are part of team Jedi under DigiCom project lead by Nirmal.</p></div>
                </div>
                <!-- About Section Button-->
                <div class="row">
                    <div>
                        <a style="color:#FF612B;border-color:#FF612B;" class="btn btn-xl btn-outline-light" href="https://www.optum.com" target="_blank">
                            <i class="fas fa-download me-2"></i>Dowload Brochure
                        </a>
                        <a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>   
                        <a style="color:#FF612B;border-color:#FF612B;" class="btn btn-xl btn-outline-light" href="/">
                            Home Page
                        </a>
                    </div>    
                </div>
            </div>
        </section>
  <AppFooter :msgFooter="phytnessfooter"></AppFooter>
  <AppCopyright :msgCopyright="phytnesscopyright"></AppCopyright>         
</template>

<script>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import AppCopyright from '../components/AppCopyright.vue'
export default {
    name: 'AboutSection',
    props:{ 

    },
    components:{
        AppHeader,
        AppFooter,
        AppCopyright,
    }
}
</script>