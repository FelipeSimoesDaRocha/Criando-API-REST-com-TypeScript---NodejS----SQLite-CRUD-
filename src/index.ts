import dotenv from 'dotenv';
dotenv.config();

import express, { Request , Response} from 'express';

const PORT = process.env.PORT || 8091;

const app = express();




app.get('/',(req: Request, res: Response) =>{
    res.json({
        msg: 'ok' 
    })
})
app.listen(PORT, () => console.log('Servidor iniciado na porta ' + PORT));
