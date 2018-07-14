import Vue from 'vue'
import Router from 'vue-router'
import WorkList from '../components/drag_list.vue'
import WorkTable from '../view/work_table.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/work_list',
      component: WorkList
    },
    {
      path: '/work_table',
      component: WorkTable
    }
  ]
})
