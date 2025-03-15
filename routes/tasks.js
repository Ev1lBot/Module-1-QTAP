const express = require("express");
const router = express.Router();

let lists = [
  { id: 1, title: "Робота", tasks: [] },
  { id: 2, title: "Особисті", tasks: [] },
];

// Отримати всі списки та задачі
router.get("/", (req, res) => {
  res.render("layout.ejs", { lists });
});

// Додати новий список
router.post("/add-list", (req, res) => {
  const { title } = req.body;
  lists.push({ id: Date.now(), title, tasks: [] });
  res.redirect("/");
});

// Додати задачу в список
router.post("/add-task", (req, res) => {
  const { title, status, listId } = req.body;
  const list = lists.find((l) => l.id == listId);
  if (list) {
    list.tasks.push({ id: Date.now(), title, status });
  }
  res.redirect("/");
});

// Видалити задачу
router.post("/delete-task/:listId/:taskId", (req, res) => {
  const { listId, taskId } = req.params;
  const list = lists.find((l) => l.id == listId);
  if (list) {
    list.tasks = list.tasks.filter((task) => task.id != taskId);
  }
  res.redirect("/");
});

// Видалити список
router.post("/delete-list/:listId", (req, res) => {
  lists = lists.filter((list) => list.id != req.params.listId);
  res.redirect("/");
});

//Змінити статус задачі
router.post("/change-status/:listId/:taskId/:status", (req, res) => {
    const { listId, taskId, status } = req.params;
    const list = lists.find((l) => l.id == listId);
    if(list){
        const task = list.tasks.find((t) => t.id == taskId);
        task.status = status;
    }
    res.redirect("/");
});

module.exports = router;