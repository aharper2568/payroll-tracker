// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects

  const employees = [];
  let keepGoing = true;
  while (keepGoing) {
    const firstName = prompt('First Name:');
    const lastName = prompt('Last Name');
    let salaryInput = prompt("Enter employee's salary:");

   
    let salary = isNaN(salaryInput) ? 0 : Number(salaryInput);

    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    })


    keepGoing = confirm('Would you like to add another employee?');

  }
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let totalSalary = 0;
// using for of lets the function run without breaking the add employees button
  for (const employee of employeesArray) {
    totalSalary += Math.round(employee.salary); //Either Math.round or parseFloat works here to grab the right numbers.
  }

  const averageSalary = totalSalary / employeesArray.length;

  console.log(`Average Salary: ${averageSalary.toFixed(2)}`);
};

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
