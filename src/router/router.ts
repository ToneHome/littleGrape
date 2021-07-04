import Read from '@/pages/essayRead/essayRead';
import Write from '@/pages/essayWrite/essayWrite';
import AppHome from '../pages/appHome/index'

export default [{
  path: '/',
  redirect:'/home'
},{
  path:'/home',
  component:AppHome
},{
  path:'/read',
  component:Read
},{
  path:'/write',
  component:Write
}]