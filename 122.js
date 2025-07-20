const firebaseConfig = {
    apiKey: "AIzaSyAA-WWtvx8IDFWRqMR2D4VRwTUnnaM2ihg",
    authDomain: "urbancityportal.firebaseapp.com",
    projectId: "urbancityportal",
    storageBucket: "urbancityportal.firebasestorage.app",
    messagingSenderId: "913345317549",
    appId: "1:913345317549:web:0b0391c6cbad339799d424",
    measurementId: "G-5E6NVFM3FY"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// referance to the database
var reportsdb = firebase.database().ref('reports');
// submit the form
document.getElementById('reportForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Get form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var category = document.getElementById('category').value;
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    var priority = document.querySelector('input[name="priority"]:checked').value;
    var address = document.getElementById('address').value;
    var landmarks = document.getElementById('landmarks').value;

    // Create a new report object
    var newReport = {
        fullName: fullName,
        email: email,
        phone: phone,
        category: category,
        title: title,
        description: description,
        priority: priority,
        address: address,
        landmarks: landmarks,
        timestamp: Date.now()
    };

    // Save the report to Firebase
    reportsdb.push(newReport).then(function() {
        alert("Report submitted successfully!");
        // Reset the form
        document.getElementById('reportForm').reset();
    }).catch(function(error) {
        console.error("Error submitting report:", error);
        alert("There was an error submitting your report. Please try again later.");
    });
});