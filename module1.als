module TaskManager

// Оголошення множин
sig User {
    lists: set List  // Користувач має множину списків
}

sig List {
    owner: one User,  // Список належить одному користувачу
    tasks: set Task   // Список містить задачі
}

sig Task {
    id: one Int,     // Унікальний ідентифікатор задачі
    list: one List   // Задача належить лише до одного списку
}

// Обмеження: кожна задача належить тільки до одного списку
fact UniqueTaskList {
    all t: Task | one t.list
}

// Обмеження: список належить лише одному користувачу
fact ListBelongsToOneUser {
    all l: List | one l.owner
}

// Обмеження: унікальність ID задач
fact UniqueTaskID {
    all t1, t2: Task | (t1.id = t2.id) implies (t1 = t2)
}

// Обмеження: у користувача не може бути два списки з однаковими назвами
fact UniqueListTitles {
    all u: User | all l1, l2: List | 
        (l1.owner = u and l2.owner = u and l1 != l2) implies (l1 != l2)
}

// Обмеження: одна задача НЕ МОЖЕ бути у кількох списках
fact TaskInOnlyOneList {
    all t: Task | lone { l: List | t in l.tasks }
}

// Обмеження: ID задачі не може бути від'ємним
fact TaskIDNonNegative {
    all t: Task | t.id >= 0
}

// Обмеження: задача належить лише до списку, в якому міститься
fact TaskBelongsToContainingList {
    all t: Task | t in t.list.tasks
}

// Обмеження: якщо список належить користувачу, то він міститься в його множині списків
fact ListBelongsToUser {
    all l: List | l in l.owner.lists
}

// Запускаємо перевірку
run {} for 5
