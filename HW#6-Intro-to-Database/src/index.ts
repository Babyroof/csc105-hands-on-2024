import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { PrismaClient } from './generated/prisma/index.js'
import { error } from 'console';
import { mainRouter } from './routes/index.route.ts';

const app = new Hono()
export const db = new PrismaClient();

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

db.$connect()
    .then(() => {
      console.log("Connect to the database");
    })
    .catch(() => {
      console.log("Error connecting to the database: ", error); 
    })

app.route("", mainRouter);

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
