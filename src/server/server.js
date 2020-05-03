import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 8000;
app.listen(port,() => {
    console.log(`here listening at http://localhost:${port}`);
});
