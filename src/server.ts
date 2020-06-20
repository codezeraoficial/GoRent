import app from './app';
import * as mongoose from 'mongoose';

mongoose.connect('mongodb+srv://infosistemas:Brasil@123@cluster0-84qfi.mongodb.net/<infosistemas>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.listen(3333);