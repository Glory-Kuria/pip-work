
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