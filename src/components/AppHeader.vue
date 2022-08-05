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
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" ><router-link style="color:#FF6600" to="/login">Login</router-link></a></li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" ><router-link style="color:#FF6600" to="/signup">Signup</router-link></a></li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" ><router-link style="color:#FF6600" to="/about">About</router-link></a></li>
                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded"><router-link style="color:#FF6600" to="/contact">Contact</router-link></a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'AppHeader',
    props:{
       msgHeader: String  
    }
}
</script>

<style>
</style>