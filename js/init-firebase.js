// Initialize Firebase
  var config = {
    apiKey: "AIzaSyByucYkNuP84hVntvB-xnKgEj024hMDIm4",
    authDomain: "myfintechorg.firebaseapp.com",
    databaseURL: "https://myfintechorg.firebaseio.com",
    projectId: "myfintechorg",
    storageBucket: "myfintechorg.appspot.com",
    messagingSenderId: "283153497930"
  };
  
  //Initialize main firebase app
  firebase.initializeApp(config);
  
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();
    
  // Variables
  var pageURL = window.location.protocol+"//"+window.location.host;
  var pageLogin = "/index.html";
  var pageMain = "/index.html";
  var pageAdmin = "/index.html";
  console.log("pageURL is: "+pageURL);
  console.log("pageLogin is: "+pageLogin);
  console.log("pageMain is: "+pageMain);
  console.log("pageAdmin is: "+pageAdmin);

  // Function for Logging out
  function callLogout() {
    firebase.auth().signOut().then(function() {
      window.location.replace(pageURL+pageMain);
    }).catch(function(error) {
      console.log(error);
    });
  }
