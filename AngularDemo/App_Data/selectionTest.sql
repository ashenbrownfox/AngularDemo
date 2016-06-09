SELECT emp.firstName, emp.lastName,emp.gender, emp.salary 
FROM dbo.tblEmployees AS emp
WHERE emp.lastName = 'James'
OR emp.lastName = 'Curry';

SELECT Id, Name, CountryId FROM tblCity
WHERE tblCity.CountryId = 2
