import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
const app = express();
app.use(cors());
dotenv.config();
const PORT = process.env.PORT||5001;
const user = {
  name:'Manish',
  address:'Varanasi',
  phone:999999999
}
app.get('/',(req,res)=>{
    res.json({
      success:"Server is Running",
      data:user
    })
});
app.listen(PORT,()=>{
  console.log(`Server is running🚀 at http://localhost:${PORT}`);
  
})
