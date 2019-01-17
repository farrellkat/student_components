const students = [
    {
        name: "Chris Miller",
        class: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        class: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        class: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        class: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        class: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        class: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        class: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        class: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        class: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        class: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        class: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        class: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

const h1 = (...props) => {
    return `<h1 class="${props[1]}">${props[0]}</h1>`
}
const section = (...props) => {
    return `<section class="bordered dashed ${props[0]}">${props[1]}</section>`
}
const aside = (...props) => {
    return `<aside class="${props[0]}">${props[1]}</aside>`
}

const element = (...props) => {
    return `<${props[0]} class="${props[1]}">${props[2]}></${props[0]}>`
}

console.log(element("h1", "Generic Component Maker", "xx-large orange"))

// const studentFunc = (name, sectionContent, info, clazz) => {
//     return `
//         <div id="student">
//             ${h1(name, `xx-large ${clazz}`)}
//             ${section(sectionContent, "section--padded")}
//             ${aside(info, "pushRight")}
//         </div>
//     `
// }
// const container = document.querySelector("#container")

// students.forEach(currentStudent => {
//     const studentHTMLRepresentation = student(currentStudent.name, currentStudent.class, currentStudent.info)
//         container.innerHTML += studentHTMLRepresentation
//     })



    
    // for (student of students) {
    //     let studentComponent = ""
    //     if (student.score >= 60) {
    //         studentComponent = studentFunc(student.name, student.class, student.info, "passing")
    //     } else {
    //         studentComponent = studentFunc(student.name, student.class, student.info, "failing")
    //     }
    //     console.log(studentComponent)
    //     container.innerHTML += studentComponent
    // }

