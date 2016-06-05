create table tblEmployees
(
	Id int primary key identity,
	firstName nvarchar(50),
	lastName nvarchar(50),
	gender nvarchar(10),
	salary int
);
Go

INSERT INTO tblEmployees values ('Draymond', 'Green', 'Male', 55000);
INSERT INTO tblEmployees values ('Stephen', 'Curry', 'Female', 55000);
INSERT INTO tblEmployees values ('LeBron', 'James', 'Male', 55000);
INSERT INTO tblEmployees values ('Kobe', 'Bryant', 'Male', 55000);
INSERT INTO tblEmployees values ('Klay', 'Thompson', 'Male', 55000);
Go