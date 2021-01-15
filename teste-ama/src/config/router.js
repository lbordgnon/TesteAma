import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import Planets from '@/components/pages/Planets'
import Starships from '@/components/pages/Starships'
import Vehicles from '@/components/pages/Vehicles'
import Peoples from '@/components/pages/Peoples'
import Films from '@/components/pages/Films'
import Species from '@/components/pages/Species'



import Planet from '@/components/pages/Planet'
import Starship from '@/components/pages/Starship'
import Vehicle from '@/components/pages/Vehicle'
import People from '@/components/pages/People'
import Film from '@/components/pages/Film'
import Specie from '@/components/pages/Specie'


Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
},
{
    name: 'planets',
    path: '/planets',
    component: Planets
},
{
    name: 'starships',
    path: '/starships',
    component: Starships
},
{
    name: 'peoples',
    path: '/peoples',
    component: Peoples
},
{
    name: 'species',
    path: '/species',
    component: Species
},
{
    name: 'vehicles',
    path: '/vehicles',
    component: Vehicles
},
{
    name: 'films',
    path: '/films',
    component: Films
},
{
    name: 'planet',
    path: '/planet/:id',
    component: Planet,
    props: true,
},
{
    name: 'starship',
    path: '/starship/:id',
    component: Starship,
    props: true,
},
{
    name: 'vehicle',
    path: '/vehicle/:id',
    component: Vehicle,
    props: true,
},
{
    name: 'people',
    path: '/people/:id',
    component: People,
    props: true,
},
{
    name: 'film',
    path: '/film/:id',
    component: Film,
    props: true,
},
{
    name: 'specie',
    path: '/specie/:id',
    component: Specie,
    props: true,
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
