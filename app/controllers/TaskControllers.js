// task controller.js
export const CreateTask = async (req, res) => {
    try {
        const { title, description, status } = req.body; // Example fields for a task
        // Logic to save the task in the database (using a Task model)
        // const task = await Task.create({ title, description, status });
        return res.status(201).json({
            status: "success",
            message: "Task created successfully",
            // data: task,
        });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
};

export const UpdateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, status } = req.body; // Example fields to update
        // Logic to update the task
        // const updatedTask = await Task.findByIdAndUpdate(id, { title, status }, { new: true });
        return res.status(200).json({
            status: "success",
            message: "Task updated successfully",
            // data: updatedTask,
        });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
};

export const TaskListByStatus = async (req, res) => {
    try {
        const { status } = req.query; // Example query parameter
        // Logic to fetch tasks by status
        // const tasks = await Task.find({ status });
        return res.status(200).json({
            status: "success",
            message: "Task list fetched successfully",
            // data: tasks,
        });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
};

export const DeleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        // Logic to delete the task
        // await Task.findByIdAndDelete(id);
        return res.status(200).json({
            status: "success",
            message: "Task deleted successfully",
        });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
};

export const CountTask = async (req, res) => {
    try {
        // Logic to count tasks
        // const taskCount = await Task.countDocuments();
        return res.status(200).json({
            status: "success",
            message: "Task count fetched successfully",
            // data: taskCount,
        });
    } catch (error) {
        return res.status(500).json({ status: "error", message: error.message });
    }
};
