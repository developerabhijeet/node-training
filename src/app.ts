
import express from "express";
import routes from './routes';

const PORT = 3001;

const app: express.Express = express();

app.use(express.json());
app.use(routes);

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Get Started! :)");
});

app.get('/test', (req: express.Request, res: express.Response) =>{
    res.sendFile(__dirname + "/test.html")
});

// app.get("/user/:name", (req: express.Request, res: express.Response) => {
//   res.json(`Hi ${req.params.name }`);
// });

app.listen(PORT, () => 
    console.log(`app is running on this port ${PORT}`)
);
