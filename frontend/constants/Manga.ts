export interface TitleInfo {
  titleNo: number;
  language: string;
  title: string;
  writingAuthorName: string;
  representGenre: string;
  newTitle: boolean;
  ageGradeNotice: boolean;
  thumbnail: string;
  thumbnailIpad: string;
  starScoreAverage: number;
  starScoreCount: number;
  readCount: number;
  favoriteCount: number;
  mana: number;
  rankingMana: number;
  likeitCount: number;
  lastEpisodeRegisterYmdt: number;
  synopsis: string;
  totalServiceEpisodeCount: number;
  serviceStatus: string;
  badgeType: string;
  previewDisabled: boolean;
  recommendNo: number;
  linkTitleNo: number;
  recommendImageUrl: string;
  bannerContent: string;
  sortOrder: number;
  imageType: string;
  displayRecommendImageUrl: string;
  service: boolean;
  genreColor: string;
  titleForSeo: string;
  representGenreCssCode: string;
  representGenreSeoCode: string;
  webtoonType: string;
  starScoreTotal: number;
}

export interface MangaMap {
  [title: string]: MangaInfo[]
}

export interface MangaInfo {
  mobileImageUrl: string,
  titleInfo: TitleInfo
}
