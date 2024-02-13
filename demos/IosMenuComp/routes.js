/**
 * Created by Rick on 2021-10-13.
 */

import HomeComp from './views/HomeComp.vue';
import EmployeesComp from './views/EmployeesComp.vue';
import AboutComp from './views/AboutComp.vue';
export let routes = [
  {
    path: '/',
    component: HomeComp,
    name: 'Home',
    icon: '&#x210B',
    heading: 'Main Links'
  },
  {
    path: '/employees',
    component: EmployeesComp,
    name: 'Employees',
    props: {numberOfEmployees: 5},
    icon: '&#x2192',
    heading: null
  },
  {
    path: '/about',
    component: AboutComp,
    name: 'About',
    icon: '&#x2192',
    heading: null
  },
];

