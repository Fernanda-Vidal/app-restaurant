import app from './app';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.NODE_PORT || 3001;

const server = app.listen(PORT, () => {
    console.log(`Server is running on Port: ${PORT}`);
})

export default server;