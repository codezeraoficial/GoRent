import app from './app';
import * as mongoose from 'mongoose';
import {connect} from './database/mongoose';

connect();

app.listen(3333);