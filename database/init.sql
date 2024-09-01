CREATE DATABASE IF NOT EXISTS Courses;

USE Courses;

CREATE TABLE IF NOT EXISTS CourseDetails(
    CourseID INT PRIMARY KEY,
    Course VARCHAR(255),
    Duration VARCHAR(50)
);


INSERT INTO CourseDetails (CourseID, Course, Duration) VALUES (1, 'Introduction to Programming', '3 months'),  (2, 'Database Management Systems', '4 months'), (3, 'Web Development', '6 months'),  (4, 'Data Science with Python', '5 months'),(5, 'Machine Learning Basics', '3 months');