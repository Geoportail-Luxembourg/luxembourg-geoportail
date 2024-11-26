export async function loadGoogleapis() {
  return await new Promise((resolve, reject) => {
    if (!window.hasOwnProperty('google')) {
      var script = document.createElement('script');
      script.src = 'https://maps.googleapis.com/maps/api/js?v=3&key=AIzaSyCObzX7dJqeGm5Wv2VwS4JzNyEtLsOgWX8'
      script.onload = function() {
        resolve('loaded')
      }
      document.getElementsByTagName('head')[0].appendChild(script);
    } else {
      resolve('loaded');
    }
  })
}
