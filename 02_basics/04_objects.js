// ======================= OBJECTS IN JAVASCRIPT =======================

// Singleton object
// Created using constructor
// const tinderUser = new Object()

// Non-singleton object (Most commonly used)
const tinderUser = {};

// Adding properties to object
tinderUser.id = 123454;
tinderUser.name = "Tripti";
tinderUser.isLoggedIn = false;


// ======================= NESTED OBJECTS =======================

const regularUser = {
    email: "some@gmail.com",

    fullname: {
        userfullname: {
            firstname: "Tripti",
            lastname: "Jha"
        }
    }
};

// Optional chaining (?.)
// Prevents error if property does not exist
console.log(regularUser.fullname?.userfullname.firstname);


// ======================= MERGING OBJECTS =======================

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj3 = {5: "e", 6: "f"};

// Method 1: Object.assign()
// const obj = Object.assign({}, obj1, obj2, obj3);

// Method 2: Spread operator (Modern & Easy)
const obj = {...obj1, ...obj2, ...obj3};

console.log(obj);


// ======================= ARRAY OF OBJECTS =======================

const users = [
    {
        id: 1,
        email: "tripti@gmail.com"
    },
    {
        id: 2,
        email: "arya@gmail.com"
    },
    {
        id: 3,
        email: "pihu@gmail.com"
    },
    {
        id: 4,
        email: "suniti@gmail.com"
    },
    {
        id: 5,
        email: "ekta@gmail.com"
    }
];

// Accessing array object values
console.log(users[1].email);


// ======================= OBJECT METHODS =======================

console.log(tinderUser);

// Returns array of keys
console.log(Object.keys(tinderUser));

// Returns array of values
console.log(Object.values(tinderUser));

// Returns array of key-value pairs
console.log(Object.entries(tinderUser));

// Checks if property exists
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// ======================= OBJECT DESTRUCTURING =======================

const course = {
    coursename: "JS",
    price: "999",
    courseInstructor: "tripti"
};

// Destructuring object
// courseInstructor property renamed as instructor
const {courseInstructor: instructor} = course;

console.log(instructor);