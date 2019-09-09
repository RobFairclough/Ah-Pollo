import * as mysql from 'mysql';
import * as Knex from 'knex';
import { dbConfig, knexConfig } from '../config';

export const knex: Knex = require('knex')(knexConfig);
