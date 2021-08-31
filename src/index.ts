import express { Request ,Response} from 'express';

const PORT = process.env.PORT || 8091;

const app = express();
app.use(bodyParser.json());
useRoutes(app);


app.listen(PORT, () => console.log('Servidor iniciado na porta ' + PORT));
