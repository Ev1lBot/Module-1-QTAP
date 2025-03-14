const request = require("supertest");
const express = require("express");
const taskRoutes = require("../routes/tasks");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use("/", taskRoutes);

describe("Task Manager API", () => {
  test("GET / - отримати всі списки", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.text).toContain("Менеджер задач");
  });

  test("POST /add-list - додати список", async () => {
    const response = await request(app).post("/add-list").send({ title: "Новий список" });
    expect(response.status).toBe(302); // Перенаправлення після додавання
  });

  test("POST /add-task - додати задачу в список", async () => {
    const response = await request(app).post("/add-task").send({
      title: "Нова задача",
      status: "todo",
      listId: 1,
    });
    expect(response.status).toBe(302);
  });

  test("POST /delete-task/:listId/:taskId - видалити задачу", async () => {
    const response = await request(app).post("/delete-task/1/101");
    expect(response.status).toBe(302);
  });

  test("POST /delete-list/:listId - видалити список", async () => {
    const response = await request(app).post("/delete-list/1");
    expect(response.status).toBe(302);
  });

  test("POST /change-status/:listId/:taskId/:status - змінити статус", async () => {
    const response = await request(app).post("/change-status/1/101/in-progress");
    expect(response.status).toBe(302);
  });
});
