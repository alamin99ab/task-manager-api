import express from "express";
const router = express.Router();

import * as TaskController from "../app/controllers/TaskControllers.js";
import * as UserController from "../app/controllers/UserController.js";


router.post("/Registration", UserController.Registration); 
router.post("/Login", UserController.Login); 
router.get("/ProfileDetails", UserController.ProfileDetails); 
router.post("/ProfileUpdate", UserController.ProfileUpdate); 
router.get("/EmailVerify", UserController.EmailVerify); 
router.post("/CodeVerify", UserController.CodeVerify); 
router.post("/ResetPassword", UserController.ResetPassword); 


router.post("/CreateTask", TaskController.CreateTask); 
router.put("/UpdateTask", TaskController.UpdateTask); 
router.get("/TaskListByStatus", TaskController.TaskListByStatus); 
router.delete("/DeleteTask", TaskController.DeleteTask); 
router.get("/CountTask", TaskController.CountTask); 

export default router;
