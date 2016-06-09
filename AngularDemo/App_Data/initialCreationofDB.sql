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

Create Table tblCountry
(
    Id int primary key identity,
    Name nvarchar(50)
)
Go

Insert into tblCountry values ('India')
Insert into tblCountry values ('USA')
Insert into tblCountry values ('UK')
Go

Create Table tblCity
(
    Id int primary key identity,
    Name nvarchar(50),
    CountryId int foreign key references tblCountry(Id)
)
Go

Insert into tblCity values ('Mumbai', 1)
Insert into tblCity values ('Delhi', 1)
Insert into tblCity values ('Bangalore', 1)
Insert into tblCity values ('Chennai', 1)
Insert into tblCity values ('Hyderabad', 1)
Insert into tblCity values ('New York', 2)
Insert into tblCity values ('Los Angeles', 2)
Insert into tblCity values ('Chicago', 2)
Insert into tblCity values ('Houston', 2)
Insert into tblCity values ('Philadelphia', 2)
Insert into tblCity values ('London', 3)
Insert into tblCity values ('Birmingham', 3)
Insert into tblCity values ('Coventry', 3)
Insert into tblCity values ('Liverpool', 3)
Insert into tblCity values ('Manchester', 3)

Go