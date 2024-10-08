import { Request, Response } from "express";

const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const options = {
  method: 'GET',
  url: 'https://webtoon.p.rapidapi.com/canvas/home',
  params: {language: 'en'},
  headers: {
    'x-rapidapi-key': process.env.WEBTOONKEY,
    'x-rapidapi-host': 'webtoon.p.rapidapi.com'
  }
};

console.log(process.env.WEBTOONKEY)

export interface SearchQuery {
    startIndex:  number,
    query: string,
    pageSize: number,
    language: string
}

export async function showHome(req: Request, res: Response) {
    try {
        const response = await axios.request(options);
        res.send(response.data)
    } catch (error) {
        console.error(error);
        res.send("Error")
    }
}