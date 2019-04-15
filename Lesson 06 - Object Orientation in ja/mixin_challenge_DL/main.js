/*

Create a user profile object that contains properties for
name
address
city
state
zipcode
avatar

than log the new profile

*/



class Profile {
    constructor(name, address, city, state, zip, avatar) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.avatar = avatar;
    }

    getProfileUpdate() {
        return {name: "newName", city: "San Francisco", avatar: "The Fog"};
    }

    updateProfile(object) {
        const newProfile = Object.assign({}, object, object.getProfileUpdate());
        console.log(newProfile); // logging the new profile
    }
}

let profile = new Profile("Bob", "123 No Way", "Charlotte", "NC", "28202", "A Building"); // defining new variables for object
let newProfile = new Profile(
  "Bob",
  "123 No Way",
  "Charlotte",
  "NC",
  "28202",
  "A Building"
);
profile.updateProfile(newProfile);