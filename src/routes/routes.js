import Home          from  '../views/Home'
import { store } from '../store/store'
export default [
  { path : '/', name : 'home', component : Home },
  { path : '/admin-structure',
    name : 'admin-structure',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "admins" */ '../views/AdminStructure.vue')
  },
  { path : '/about',
    name : 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path : '/admissions',
    name : 'admissions',
    component: () => import(/* webpackChunkName: "admis" */ '../views/Admissions.vue')
  },
  { path : '/gallery',
    name : 'gallerySet',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/Gallery.vue')
  },
  { path : '/gallery/:set_id/:set_title',
    name : 'gallery',
    component: () => import(/* webpackChunkName: "gallery" */ '../views/GalleryPicsGrid.vue'),
    props: (route) => {
      return {
        galleryData : store.getters['gallery/all'][route.params.set_id],
        setTitle : route.params.set_title || ''
      }
    }
  },
  { path : '/awards',
    name : 'awards',
    component: () => import(/* webpackChunkName: "awards" */ '../views/AwardsAndAchievements.vue')
  },
  { path : '/newsletter',
    name : 'newsletter',
    component: () => import(/* webpackChunkName: "newsletter" */ '../views/Newsletter.vue')
  },
  { path : '/events',
    name : 'events',
    component: () => import(/* webpackChunkName: "events" */ '../views/Events.vue')
  },
  { path : '/event/:id',
    name : 'event',
    component: () => import(/* webpackChunkName: "events" */ '../views/Event.vue'),
    props: (route) => {
      return {
        galleryData : store.getters['events/events'][route.params.id],
        setTitle : route.params.set_title || ''
      }
    }
  },
  { path : '/teachers',
    name : 'teachers',
    component: () => import(/* webpackChunkName: "teachers" */ '../views/Teachers.vue')
  },
  { path : '/teacher/:id',
    name : 'teacher',
    component: () => import(/* webpackChunkName: "teacher" */ '../views/Teacher.vue')
  },
  { path : '/staff/:id',
    name : 'staff',
    component: () => import(/* webpackChunkName: "staff" */ '../views/Staff.vue'),
    props: (route) => {
      return { staff : store.state.school.management[route.params.id] }
    }
  },
  { path : '/management-team',
    name : 'management-team',
    component: () => import(/* webpackChunkName: "mgt" */ '../views/ManagementTeam.vue'),
  },
  { path : '/contact',
    name : 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  { path : '/calendar',
    name : 'calendar',
    component: () => import(/* webpackChunkName: "contact" */ '../views/AcademicCalendar.vue')
  },
]
