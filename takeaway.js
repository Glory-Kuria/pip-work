
// social media application where users can follow other users

class socialMedia {
    constructor() {
        this.followers = {};
    }
    addUser(user) {
        this.followers[user] = [];
    }
    addFollower(user, follower) {
        this.followers[user].push(follower);
    }
    getFollowers(user) {
        return this.followers[user] || [];
    }
}

const app = new socialMedia();
app.addUser("user1");
app.addUser("user2");
app.addFollower("user1", "user2");
app.addFollower("user1", "user3");
app.addFollower("user2", "user1");
console.log(app.getFollowers("user1"));  
console.log(app.getFollowers("user2"));  
console.log(app.getFollowers("user3"));  


// Develop a system for scheduling appointments at a healthcare facility.
//  Consider factors like doctor availability, patient preferences, and appointment reminders.

class AppointmentScheduling {
    constructor(name, skills) {
        this.name = name;
        this.skills = skills;
         this.schedule = {};
       }
addAvailability(date, times) {
 this.schedule[date] = times; }

isAvailable(date, time) {
 return this.schedule[date] && this.schedule[date].includes(time); 
}

scheduleAppointment(patient, date, time) {
 if (this.isAvailable(date, time)) {
 const appointment = new Appointment(this, patient, date, time);
 this.schedule[date] = this.schedule[date].filter(slot => slot !== time);
 console.log("Appointment scheduled:", appointment); return appointment; }
  else {
  console.log("Requested time slot is not available.");
 } }
 }

 class Patient {
 constructor(name, email, phone) {
    this.name = name;
    this.contactInfo = { email, phone };
    this.preferences = {}; }

setPreferences(doctor, date, time) {
this.preferences = { doctor, date, time }; } }

class Appointment {
constructor(doctor, patient, date, time) {
this.doctor = doctor;
this.patient = patient;
this.date = date;
this.time = time; } }
let appointments = new AppointmentScheduling("Dr. Ken", "gynacologist");
appointments.addAvailability("2024-05-10", ["09:00", "10:00", "14:00"]);
const patients = new Patient("Martha Mutua", "mutuamartha.com", "34-24-89-66");
patients.setPreferences(appointments, "2024-05-10", "09:00");
appointments.scheduleAppointment(patients, "2024-05-10", "09:00");

