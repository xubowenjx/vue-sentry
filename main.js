import * as Sentry from "@sentry/browser";
import * as Integrations from "@sentry/integrations";

export default {
  install(Vue, { dsn }) {
    if (!dsn) {
      throw new Error("please config dsn property");
    }
    Sentry.init({
      dsn,
      integrations: [new Integrations.Vue({ Vue, attachProps: true })]
    });
  }
};
