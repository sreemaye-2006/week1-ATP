const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];

 employees.splice(2,1,{eno:100,name:"siri",marks:[40,50,60]})
     console.log(employees)
     employees.splice(3,1)
     console.log(employees)
for (let em of employees) {
    em.marks.splice(2, 1, 75);
}
console.log(employees)


