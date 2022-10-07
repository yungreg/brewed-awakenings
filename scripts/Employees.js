import { getEmployees } from "./database.js"

const employees = getEmployees()

export const Employees = () => {
    let html = `<ul>`

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += `</ul>`

    return html
}

document.addEventListener(
    "click", 
    (clickEvent) => {
      const itemClicked = clickEvent.target;
  
      if (itemClicked.id.startsWith("employee")) {
        const [, employeeId] = itemClicked.id.split("--");
  
        for (const employee of employees) {
          if (employee.id === parseInt(employeeId)) {
            window.alert(`${employee.name} has sold ${employee.productsSold} items. That's great! `);
          }
        }
      }
    }
  );


  // todo: step through and figure out how you broke this by adding productsSold to the database. you could always just not do it that way. 