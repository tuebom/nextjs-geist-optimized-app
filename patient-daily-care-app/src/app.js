var app = new Framework7({
  root: '#app',
  name: 'Patient Daily Care',
  id: 'com.patient.dailycare',
  theme: 'auto',
  routes: [
    {
      path: '/',
      url: './pages/home.html',
    },
    {
      path: '/booking/',
      url: './pages/booking.html',
    },
    {
      path: '/admin/',
      url: './pages/admin.html',
    },
    {
      path: '/nurse/',
      url: './pages/nurse.html',
    },
  ],
});

// Create main view
var mainView = app.views.create('.view-main');
