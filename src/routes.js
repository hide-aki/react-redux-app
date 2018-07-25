import React from 'react';
import Loadable from 'react-loadable';
import LoadingDots from './components/LoadingDots';

function Loading() {
    return <LoadingDots interval={300} dots={3} style={{fontSize:48}}/>;
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

const AddCourse = Loadable({
  loader: () => import('./views/courses/AddCourse'),
  loading: Loading,
});

const ManageCourse = Loadable({
  loader: () => import('./views/courses/ManageCourse'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/home', exact: true, name: 'Home', component: Home},
  { path: '/about', exact: true, name: 'About', component: About},
  { path: '/courses', exact: true, name: 'Courses', component: Courses},
  { path: '/courses/add', exact: true, name: 'Add Course', component: AddCourse},
  { path: '/courses/:id', exact: true, name: 'Manage Course', component: ManageCourse},
]
export default routes;