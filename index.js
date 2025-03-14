const express = require('express');
const tasksRoutes = require('./routes/tasks');

const app = express();
const port = 3000;


app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/', tasksRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});