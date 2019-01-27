/*
 * 1. sets i18n.locale and state.locale if possible
 * 2. redirects if not with locale
 */
export default function ({ 
  isHMR, app, store, route, params, error, redirect, req
}) {
  var locale
  var acceptedLocales = ['es', 'en']
  var userLocale = req.headers['accept-language'].split(',')[0].toLocaleLowerCase().substring(0, 2)
  if (isHMR) { // ignore if called from hot module replacement
    return;
  } // if url does not have language, redirect to english
  else if (!params.lang) {
    locale = acceptedLocales.includes(userLocale) ? userLocale : 'en'
    return redirect('/' + locale +route.fullPath);
  }
  // based on directory structure _lang/xxxx, en/about has params.lang as "en"
  locale = params.lang || 'en'
  store.commit('SET_LANG', locale); // set store
  app.i18n.locale = store.state.locale;
}