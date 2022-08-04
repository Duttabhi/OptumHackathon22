import {createRouter, createWebHistory} from 'vue-router'
import HomeVue from '../components/HomeVue'
import LoginPage from '../components/LoginPage'
import SignUp from '../components/SignUp'
import AboutSection from '../components/AboutSection'
import ContactSection from '../components/ContactSection'
import UserHome from '../components/UserHome'
const routes =[
    {
        path:'/login',
        name:'login',
        component: LoginPage
    },
    {
        path:'/user',
        name:'user',
        component: UserHome
    },    
    {
        path:'/signup',
        name:'signup',
        component: SignUp
    },
    {
        path:'/',
        name:'home',
        component: HomeVue
    },    
    {
        path:'/about',
        name:'AboutSection',
        component: AboutSection
    },
    {
        path:'/contact',
        name:'ContactSection',
        component: ContactSection
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router