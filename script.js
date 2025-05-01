let courseName = document.getElementById("courseName");
let courseCategory = document.getElementById("courseCategory");
let coursePrice = document.getElementById("coursePrice");
let courseDescription = document.getElementById("courseDescription");
let courseCapacity = document.getElementById("courseCapacity");
let click = document.getElementById("click");
let dataContainer = document.getElementById("data");
let deleteAllBtn = document.getElementById("deleteBtn");

let courses = localStorage.getItem("courses")
    ? JSON.parse(localStorage.getItem("courses"))
    : [];

displayCourses();

click.addEventListener("click", function (e) {
    e.preventDefault();
    let course = {
        name: courseName.value,
        category: courseCategory.value,
        price: coursePrice.value,
        description: courseDescription.value,
        capacity: courseCapacity.value,
    };

    courses.push(course);
    localStorage.setItem("courses", JSON.stringify(courses));
    displayCourses();
    document.querySelector("form").reset();
});

function displayCourses() {
    let result = "";
    courses.forEach((course, index) => {
        result += `
            <tr>
                <td>${index + 1}</td>
                <td>${course.name}</td>
                <td>${course.category}</td>
                <td>${course.price}</td>
                <td>${course.description}</td>
                <td>${course.capacity}</td>
                <td><button onclick="updateCourse(${index})" class="btn btn-warning btn-sm">Update</button></td>
                <td><button onclick="deleteCourse(${index})" class="btn btn-danger btn-sm">Delete</button></td>
            </tr>
        `;
    });
    dataContainer.innerHTML = result;
}

function deleteCourse(index) {
    courses.splice(index, 1);
    localStorage.setItem("courses", JSON.stringify(courses));
    displayCourses();
}

deleteAllBtn.addEventListener("click", function () {
    courses = [];
    localStorage.setItem("courses", JSON.stringify(courses));
    displayCourses();
});

function updateCourse(index) {
    let course = courses[index];
    courseName.value = course.name;
    courseCategory.value = course.category;
    coursePrice.value = course.price;
    courseDescription.value = course.description;
    courseCapacity.value = course.capacity;

    courses.splice(index, 1);
    displayCourses();
}
