<template>
        <AppHeader></AppHeader>
        <!-- Contact Section-->
        <section class="page-section" id="contact">
            <div class="container">
                <!-- Contact Section Heading-->
                <h2 style="color:#FF612B" class="page-section-heading text-center text-uppercase  mb-0">Write Us</h2>
                <!-- Icon Divider-->
                <div class="divider-custom">
                    <div  class="divider-custom-icon"><i class="fas fa-circle"></i></div>
                    <div   class="divider-custom-icon"><i class="far fa-circle"></i></div>
                    <div  class="divider-custom-icon"><i class="fas fa-circle"></i></div>
                    <div   class="divider-custom-icon"><i class="far fa-circle"></i></div>
                    <div  class="divider-custom-icon"><i class="fas fa-circle"></i></div>
                </div>
                <!-- Contact Section Form-->
                <div class="row justify-content-center">
                    <div class="col-lg-8 col-xl-7">
                        <form id="contactForm">
                            <!-- Name input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                <label for="name">Full name</label>
                                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                            </div>
                            <!-- Email address input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                <label for="email">Email address</label>
                                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                            </div>
                            <!-- Phone number input-->
                            <div class="form-floating mb-3">
                                <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                <label for="phone">Phone number</label>
                                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                            </div>
                            <!-- Message input-->
                            <div class="form-floating mb-3">
                                <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style="height: 10rem" data-sb-validations="required"></textarea>
                                <label for="message">Message</label>
                                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                            </div>
                            <!-- Submit success message-->
                            <!---->
                            <!-- This is what your users will see when the form-->
                            <!-- has successfully submitted-->
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    <br />
                                    <a href="https://www.optum.com">Optum</a>
                                </div>
                            </div>
                            <!-- Submit error message-->
                            <!---->
                            <!-- This is what your users will see when there is-->
                            <!-- an error submitting the form-->
                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                            <!-- Submit Button-->
                            <table>
                                <tr>
                                    <td>
                                        <button class="btn btn-primary btn-xl" id="submitButton" type="submit">Send</button>
                                    </td>
                                    <td>&nbsp;</td>
                                    <td>
                                    <router-link to="/">Home Page</router-link>
                                    </td>
                                </tr>
                            </table>    
                        </form>
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
    name: 'ContactSection',
    props:{ 

    },
    components:{
        AppHeader,
        AppFooter,
        AppCopyright,
    }
}
</script>