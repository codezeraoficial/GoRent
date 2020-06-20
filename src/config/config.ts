const dotenv = require('dotenv');

dotenv.config();

export default{
  mongoconnect: process.env.MONGO_URL,  
};