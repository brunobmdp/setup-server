import  Fastify  from 'fastify';
import cors from '@fastify/cors';
import formBody  from "@fastify/formbody"
import { appRoutes } from './routes';

const app = Fastify()

app.register(cors)
app.register(formBody)
app.register(appRoutes)



app.listen({
  port:process.env.PORT? Number(process.env.PORT) : 3333,
  host: '0.0.0.0',
}).then(()=>{
  console.log('Server is running!!!')
})
