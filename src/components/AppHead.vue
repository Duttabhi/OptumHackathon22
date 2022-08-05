<template>
       <!-- Masthead-->
        <header style = "padding-top: calc(4rem + 0px);" class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                <video width="50%" height="" preload="true" autoplay loop muted>
                    <source src="../assets/img/video.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <p>&nbsp;&nbsp;&nbsp;</p>
                <!-- Masthead Heading-->
                <h3 style="color:#FF6600" class="masthead-heading mb-0">ChronicDiseaseAIRival</h3>
                <!-- Icon Divider-->
                <div class="divider-custom divider-light">
                    <div  class="divider-custom-icon"><i class="fas fa-circle"></i></div>
                    <div   class="divider-custom-icon"><i class="far fa-circle"></i></div>
                    <div  class="divider-custom-icon"><i class="fas fa-circle"></i></div>
                    <div   class="divider-custom-icon"><i class="far fa-circle"></i></div>
                    <div  class="divider-custom-icon"><i class="fas fa-circle"></i></div>                    
                </div>
                <!-- Masthead Subheading-->
                <p style="color:#FF6600;" class="masthead-subheading font-weight-light mb-0">AI Buddy to help fight the disease with you!</p>
            </div>
        </header>
</template>

<script>
export default {
    name: 'AppHead',
    props:{
       msgHead: String  
    }
}
</script>

<style>
</style>