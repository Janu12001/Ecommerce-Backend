import express from 'express'
import cookieParser from'cookie-parser'
import cors from 'cors'
import morgan from 'morgan'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(cookieParser())

//morgan logger- prints info about the api request or response in console
app.use(morgan('tiny'))


export default app