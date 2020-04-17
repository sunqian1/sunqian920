import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'
import Table from '@/pages/table/index'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children:[
        {
          path: '/table',
          name: 'Table',
          component: Table
        
        }]
    }
    
   
  ]
})
