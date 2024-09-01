document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3001/courses")
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.getElementById("courseRecords");
      data.forEach((course) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <td>${course.CourseID}</td>
                    <td>${course.Course}</td>
                    <td>${course.Duration}</td>
                `;
        tableBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error fetching courses:", error);
    });
});
