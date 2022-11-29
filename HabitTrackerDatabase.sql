drop database if exists habittracker; 
create database habittracker;
use habittracker; 


create table User (
id int not null auto_increment, 
username varchar(50),
primary key (id)
);

create table category (
id int not null auto_increment, 
type varchar(50), 
primary key (id)
);


create table habit (
id int not null auto_increment, 
users_id int, 
title varchar(100), 
category_id int, 
amount varchar(50), 
startDate datetime, 
endDate datetime, 
description varchar(1000), 
primary key (id), 
foreign key (users_id) references User(id), 
FOREIGN KEY (category_id) REFERENCES category(id)
);


create table tracker (
id int not null auto_increment, 
habit_id int, 
date datetime, 
primary key (id), 
foreign key (habit_id) references habit(id)
);

insert into user (username) values ("user1");
insert into user (username) values ("user2"); 
insert into user (username) values ("user3");  

insert into category (type) values ('Self-care');
insert into category (type) values ('Fitness');
insert into category (type) values ('Social');
insert into category (type) values ('Nutrition');


insert into habit (users_id,title, category_id,amount, startDate, endDate, description) values (1,"fitness journey", 2,"Twice a day", "2022-11-29", "2022-12-31", "I'm overweight man"); 
insert into habit (users_id,title, category_id,amount, startDate, endDate, description) values (2,"Meditate", 2, "Three times a day", "2022-11-29", "2022-12-31", "Meditate"); 
insert into habit (users_id,title, category_id,amount, startDate, endDate, description) values (3,"Walking", 3, "Three times a day",  "2022-11-29", "2022-12-31", "Mental Clarity"); 




