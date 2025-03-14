import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
    console.log(`Server is running at localhost:${port}.`);
});