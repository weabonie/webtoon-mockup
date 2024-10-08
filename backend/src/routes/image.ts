import { AxiosResponse } from "axios";
import { Request, Response } from "express";

const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

export async function showImage(req: Request, res: Response) {
    console.log("https://webtoon-phinf.pstatic.net" + req.query.url)
    try {
        let options = {
            method: "GET",
            url: "https://webtoon-phinf.pstatic.net" + req.query.url,
            headers: {
                "User-Agent":
                "Mozilla/5.0 (Linux; Android 8.1.0; Mi MIX 2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Mobile Safari/537.36",
                Referer: "http://m.webtoons.com",
            },
        };

        const response = await axios.request(options);
        // console.log(response)
        res.send(response.data)
    } catch (error) {
        // console.error(error);
        res.send("Error")
    }
}