import express from 'express';
import router from './routes/banco.route.js';



const app = express();

app.set('port', 3000);

app.use(express.json());

app.use('/api/banco', router)


export default app;