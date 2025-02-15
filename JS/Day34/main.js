/**
 * - Nếu có công việc cần làm thì hiển thị công việc cần làm (gợi ý: dạng bảng).
 * - Có thể thêm công việc mới.
 * - Cập nhật thông tin công việc.
 * - Xóa công việc.
 * - Sắp xếp, lọc công việc.
 */

const tasks = document.getElementById("tasks");

fetch("http://localhost:3000/tasks")
	.then((res) => res.json())
	.then((data) => {
		data.length
			? data.forEach((task) => {
					console.log(task);
					tasks.innerHTML += /*html */ `
            <tr>
                <td>${task.id}</td>
                <td>${task.name}</td>
                <td>${task.status}</td>
                <td>${task.priority}</td>
                <td>
                    <button class="btn btn-primary">Update</button>
                    <button class="btn btn-danger">Delete</button>
                </td>
            </tr>
        `;
			  })
			: (tasks.innerHTML = "<tr><td colspan='5'>No tasks</td></tr>");
	});
