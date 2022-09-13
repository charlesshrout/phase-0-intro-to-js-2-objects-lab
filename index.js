const employee = 
{name: "Charles",
streetAddress: "2095 31st Str",}

function updateEmployeeWithKeyAndValue(employee, name, value)
{const newEmployee = {...employee} 
newEmployee[name]= value
return newEmployee}

const newEmployee = updateEmployeeWithKeyAndValue(employee, name, "Sam")

function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, value)
{employee[streetAddress] = value
    return employee}

destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, "3450 Ringsby Str")

function deleteFromEmployeeByKey(employee, name)
{const newEmployee2 = {...employee}
delete newEmployee2.name
return newEmployee2}

function destructivelyDeleteFromEmployeeByKey(employee, name)
{ delete employee.name
return employee}

destructivelyDeleteFromEmployeeByKey(employee, name)