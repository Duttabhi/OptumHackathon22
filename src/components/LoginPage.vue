<template>
<AppHeader :msgHeader="phytnessheader"></AppHeader>
<section class="gradient-custom">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;">
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Login Form</h3>
            <form action="user" @submit="onSubmit">

              <div class="row">
                <div class="col-2"></div>
                
                <div class="col-8">

                  <div class="form-outline">
                    <input type="text" id="hsid" class="form-control form-control-lg" />
                    <label class="form-label" for="hsid">Your HSID</label>
                  </div>

                </div>

              </div>


              <div class="mt-4 pt-2">
                <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
              </div>

              Not yet Registered! <router-link :to="{name: 'signup'}">sign up?</router-link>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
 
      
</template>
 
<script>
import AppHeader from '../components/AppHeader.vue'

    export default {
        data() {
            return {
                hsid: '',
            }
        },
        components:{
            AppHeader,
        },
        methods : {
            onSubmit(){
                
            }
        }

    }
</script>

<style scoped>
.gradient-custom {
/* fallback for old browsers */
background: #f093fb;

/* Chrome 10-25, Safari 5.1-6 */
background: -webkit-linear-gradient(to bottom right, rgba(240, 147, 251, 1), rgba(245, 87, 108, 1));

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: linear-gradient(to bottom right, rgba(240, 147, 251, 1), rgba(245, 87, 108, 1))
}

.card-registration .select-input.form-control[readonly]:not([disabled]) {
font-size: 1rem;
line-height: 2.15;
padding-left: .5em;
padding-right: .75em;
}
.card-registration .select-arrow {
top: 1px;
}
</style>