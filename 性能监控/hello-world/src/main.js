import Vue from 'vue'
import App from './App.vue'
import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

Vue.config.productionTip = false
Sentry.init({
  Vue,
  dsn: "http://9bd1c821a38848e1840a9b9cce61e6d7@192.168.80.147:9000/3",
  integrations: [
    new Integrations.BrowserTracing({
      // routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracingOrigins: ["localhost", "my-site-url.com", /^\//],
    }),
  ],
  logErrors: true,
  release: 'V1.0.0',
  tracesSampleRate: 1.0
});
new Vue({
  render: h => h(App),
}).$mount('#app')
