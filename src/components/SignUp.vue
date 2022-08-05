<template>
<AppHeader :msgHeader="phytnessheader"></AppHeader>
<section class="gradient-custom">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style="border-radius: 15px;background-color:#FBF9F4">
          <div class="card-body p-4 p-md-5">
            <h3 style="color:#FF6600" class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
            <form @submit="postData" method="get">

              <div class="row">
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    <input required placeholder="John Nash" type="text" id="userName" v-model="uname" class="form-control form-control-lg" />
                    <label class="form-label" for="userName">Full Name</label>
                  </div>

                </div>
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    <input required placeholder="someone@optum.om" type="email" id="emailAddress" class="form-control form-control-lg" />
                    <label class="form-label" for="emailAddress">Email</label>
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 ">

                  <div class="form-outline">
                    <input v-model="uage" required type="text"  class="form-control form-control-lg" id="Age" />
                    <label for="Age" class="form-label">Age</label>
                  </div>

                </div>
                <div class="col-md-6 mb-4">

                  <h6 class="mb-2 pb-1">Gender: </h6>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" />
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label class="form-check-label" for="otherGender">Other</label>
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                    <input required placeholder="+1 (XXX) XXX-XXXX" type="tel" id="phoneNumber" class="form-control form-control-lg" />
                    <label class="form-label" for="phoneNumber">Phone Number</label>
                  </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                    <input required type="text" v-model="zipcode" id="zipcode" class="form-control form-control-lg" />
                    <label class="form-label" for="zipcode">Zip Code</label>
                  </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                  <select v-model="dname" style="width:100%" class="select form-control-lg" id="cdisease">
                    <option value="0">Select Chronic Disease</option>
                    <option value="Diabetes">Diabetes</option>
                    <option value="Thyroid">Thyroid</option>
                  </select>
                  </div>

                </div> 
                <div class="col-md-6 mb-4 pb-2">
                  <select  style="width:100%" class="select form-control-lg"  id="ctests" v-model="tname">
                    <option value="0">Select Test Name</option>                    
                  </select>
                </div> 

                <div class="col-md-6 mb-4 pb-2">
                    <input required v-model="tdate" type="text" id="testvalue" class="form-control form-control-lg" placeholder='YYYY/MM/DD'/>
                    <label class="form-label" for="testvalue">Test Date</label>
                </div>  

                <div class="col-md-6 mb-4 pb-2">

                  <div class="form-outline">
                    <input required v-model="tvalue" type="text" id="testvalue" class="form-control form-control-lg" />
                    <label class="form-label" for="testvalue">Test Value</label>
                  </div>
                </div>   
              </div>


              <div class="mt-4 pt-2">
                <input  style="width:20%" class="btn btn-primary btn-lg" type="submit" value="Submit" />
              </div>

              Already Registered! <router-link :to="{name: 'login'}">sign in?</router-link>

            </form>
          </div>
        </div>
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
        data() {
            return {
              uname: '',
              zipcode:'',
              tname:'0',
              dname:'0',
              uage:'',
              tvalue:'',
              tdate:'',
            };
        },
        methods:{
          postData() {
            this.$router.push({name:"register", params:{

              udata: [this.tdate, this.uname, this.tname, this.tvalue, this.dname, this.uage, this.zipcode]
              }})
          },
        },
        components:{
            AppHeader,
            AppFooter,
            AppCopyright,
        },
        mounted() {
          const ddl = document.getElementById('cdisease')
          const ddl2 = document.getElementById('ctests')

          const createOption = (ddl, text, value) => {
            const opt = document.createElement('option');
            opt.value = value;
            opt.text = text;
            ddl.options.add(opt);
          }

          const configureDropDownLists = (ddl1, ddl2) => {
            
            const t1 = ['HEMOGLOBIN A1C'];
            const t2 = ['TSH'];
            ddl2.options.length = 0

            switch (ddl1.value) {
              case 'Diabetes':
                for (const t of t1) {
                  createOption(ddl2, t, t);
                }
                break;
              case 'Thyroid':
                for (const t of t2) {
                  createOption(ddl2, t, t);
                }
                break;                              
              default:
                break;
            }
          }

          ddl.addEventListener('change', () => {
            configureDropDownLists(ddl, ddl2)
          })
        },
    }
</script>

<style scoped>
.gradient-custom {
/* fallback for old browsers */
background: #FFFFFF;

/* Chrome 10-25, Safari 5.1-6 */
background: #FFFFFF;

/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background: #FFFFFF;
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