/*
 * @Author: zhang_gen_yuan
 * @Date: 2022-09-09 23:24:05
 * @LastEditTime: 2022-09-11 16:04:04
 * @Descripttion: 
 */

import DefaultTheme from "vitepress/theme";
import 'vitepress-theme-demoblock/theme/styles/index.css'
// import * as zgy from 'zgy-ui'
import { registerComponents } from './register-components'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    registerComponents(app)
    // app.component('Button',zgy.Button)
  }
}
