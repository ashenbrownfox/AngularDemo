SELECT emp.firstName, emp.lastName,emp.gender, emp.salary 
FROM dbo.tblEmployees AS emp
WHERE emp.lastName = 'James'
OR emp.lastName = 'Curry';
