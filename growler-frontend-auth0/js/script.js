$(document).ready(function() {

  $('#btn-login').on('click', function (e) {
    e.preventDefault();
    lock.show();
  });
});

function loadGrowls() {
  $.ajax({
    url: 'http://localhost:3000/growls',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('idToken')
    }
  }).done(function (data) {
    data.forEach(function (datum) {
      loadGrowl(datum)
  })
})
}



var lock = new
//1. Client ID, 2. Client Domain, 3. Oject of Attr
  Auth0Lock('GoBNjyrd7W9Jg1HECE7nH82QUhjTsM2B', 'jeauxy.auth0.com', {
    auth: {
      params: {
        scope: 'openid email'
    }
  }
});

lock.on('authenticated', function (authResult) {
  console.log(authResult);
  localStorage.setItem('idToken', authResult.idToken);
  console.log('Logged In!');
  loadGrowls();
});

function logout() {
    localStorage.removeItem('idToken')
    window.location.href = '/';
}
