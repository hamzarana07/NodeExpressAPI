// Function to fetch and display tasks using the API
function viewTasks() {
    const taskList = document.getElementById("taskList");

    axios
        .get("/api/v1/tasks")
        .then((response) => {
            const tasks = response.data.task;
            taskList.innerHTML = "";

            tasks.forEach((task) => {
                const row = document.createElement("tr");
                const titleCell = document.createElement("td");
                const completedCell = document.createElement("td");
                const editCell = document.createElement("td");
                const deleteCell = document.createElement("td");

                titleCell.textContent = task.name;
                completedCell.textContent = task.completed;

                // Create the Edit button
                const editButton = document.createElement("button");
                editButton.type = "button";
                editButton.classList.add("btn", "btn-primary");
                editButton.textContent = "Edit";
                // Add an event listener to the Edit button if needed
                // editButton.addEventListener("click", () => { /* Your edit logic */ });

                // Create the Delete button
                const deleteButton = document.createElement("button");
                deleteButton.type = "button";
                deleteButton.classList.add("btn", "btn-danger");
                deleteButton.textContent = "Delete";
                // Add an event listener to the Delete button if needed
                // deleteButton.addEventListener("click", () => { /* Your delete logic */ });

                // Append the buttons to the respective cells
                editCell.appendChild(editButton);
                deleteCell.appendChild(deleteButton);

                // Append the cells to the row
                row.appendChild(titleCell);
                row.appendChild(completedCell);
                row.appendChild(editCell);
                row.appendChild(deleteCell);

                taskList.appendChild(row);
            });
        })
        .catch((error) => {
            console.error("Error fetching tasks:", error);
            // Optionally, you can display an error message here
        });
}

document.addEventListener("DOMContentLoaded", viewTasks);

// function createTask() {
//     const taskTitle = document.getElementById("taskTitle").value;

//     axios
//         .post("/api/v1/tasks", {
//             name: taskTitle,
//             completed: false,
//         })
//         .then((response) => {
//             console.log("Task created:", response.data.task);
//             // Optionally, you can update the UI or display a success message here
//         })
//         .catch((error) => {
//             console.error("Error creating task:", error);
//             // Optionally, you can display an error message here
//         });
// }

// function getTask() {
//     const taskId = document.getElementById("taskId").value;

//     axios
//         .get(`/api/v1/tasks/${taskId}`)
//         .then((response) => {
//             const taskDetails = response.data.task;
//             const taskDetailsList = document.getElementById("taskDetails");
//             taskDetailsList.innerHTML = `
//           <li>ID: ${taskDetails._id}</li>
//           <li>Title: ${taskDetails.name}</li>
//           <li>Completed: ${taskDetails.completed}</li>
//       `;
//         })
//         .catch((error) => {
//             console.error("Error fetching task:", error);
//             // Optionally, you can display an error message here
//         });
// }

// function updateTask() {
//     const taskId = document.getElementById("updateTaskId").value;
//     const updatedTaskTitle = document.getElementById("updatedTaskTitle").value;

//     axios
//         .patch(`/api/v1/tasks/${taskId}`, { name: updatedTaskTitle })
//         .then((response) => {
//             console.log("Task updated:", response.data.task);
//             // Optionally, you can update the UI or display a success message here
//         })
//         .catch((error) => {
//             console.error("Error updating task:", error);
//             // Optionally, you can display an error message here
//         });
// }

// function deleteTask() {
//     const taskId = document.getElementById("deleteTaskId").value;

//     axios
//         .delete(`/api/v1/tasks/${taskId}`)
//         .then((response) => {
//             console.log("Task deleted:", response.data.task);
//             // Optionally, you can update the UI or display a success message here
//         })
//         .catch((error) => {
//             console.error("Error deleting task:", error);
//             // Optionally, you can display an error message here
//         });
// }
