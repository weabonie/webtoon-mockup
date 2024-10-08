import { Request, Response } from "express";
import { Manga } from "mangadex-full-api";

const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

// const options = {
//   method: 'GET',
//   url: 'https://webtoon.p.rapidapi.com/canvas/home',
//   params: {language: 'en'},
//   headers: {
//     'x-rapidapi-key': process.env.WEBTOONKEY,
//     'x-rapidapi-host': 'webtoon.p.rapidapi.com'
//   }
// };
// console.log(process.env.WEBTOONKEY)

export async function showHome(req: Request, res: Response) {
  try {
    const currentYear = new Date().getFullYear();
    const firstDayOfYear = new Date(currentYear, 0, 1); // January is month 0

    const trendingMangas = await Manga.search({
      limit: 15,
      hasAvailableChapters: true,
      createdAtSince: firstDayOfYear.toISOString().slice(0, 19),
      contentRating: ["safe"],
      order: {
        rating: "desc",
      },
    });

    const now = new Date();
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(now.getMonth() - 3);

    const newUpcoming = await Manga.search({
      limit: 15,
      hasAvailableChapters: true,
      createdAtSince: threeMonthsAgo.toISOString().slice(0, 19),
      contentRating: ["safe"],
      order: {
        rating: "desc",
      },
    });

    res.send({
      trending: trendingMangas,
      upcoming: newUpcoming,
    });
    
  } catch (error) {
    console.error(error);
    res.send("Error");
  }
}
