// Initialize Firebase
  var config = {
    apiKey: 'AIzaSyDz8z_fT-Vme_F1vN-LJTx6VXnUkbb9T-o',
    authDomain: 'email-generator-base.firebaseapp.com',
    databaseURL: 'https://email-generator-base.firebaseio.com',
    projectId: 'email-generator-base',
    storageBucket: 'email-generator-base.appspot.com',
    messagingSenderId: '456310836086'
  }
  firebase.initializeApp(config)

firebase.auth().signInAnonymously()

var addEmail = function () {
  var subject = document.getElementById('subject')
  var date = document.getElementById('date')
  var emailBody = document.getElementById('email-body')

  console.log('you submitted')
  firebase.database().ref('emails').push({
    subject: subject.value,
    date: date.value,
    body: emailBody.value
  })
}

document.getElementById('submit').addEventListener('click', addEmail)
