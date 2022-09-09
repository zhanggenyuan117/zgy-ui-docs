
import DefaultTheme from "vitepress/theme";
import * as zgy from 'zgy-ui'

// export default {
//   ...DefaultTheme,
//   enhanceApp: async ({ app, router, siteData, isServer }) => {
//     app.use(zgy)
//   }
// }


// import theme from 'vitepress/dist/client/theme-default'
import 'vitepress-theme-demoblock/theme/styles/index.css'
import { registerComponents } from './register-components'

export default {
  ...DefaultTheme,
  enhanceApp({ app, router, siteData }) {
    registerComponents(app)
    app.use(zgy)
  }
}
