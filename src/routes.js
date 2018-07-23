import React from 'react';
import Loadable from 'react-loadable';

function Loading() {
    return <div>Loading...</div>;
}

const Home = Loadable({
  loader: () => import('./views/home/Home'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./views/about/About'),
  loading: Loading,
});

const Courses = Loadable({
  loader: () => import('./views/courses/Courses'),
  loading: Loading,
});


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/home', exact: true, name: 'Home', component: Home},
  { path: '/about', exact: true, name: 'About', component: About},
  { path: '/courses', exact: true, name: 'Courses', component: Courses},
]
export default routes;