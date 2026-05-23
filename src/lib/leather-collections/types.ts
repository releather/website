export type LeatherSwatch = {
  id: string;
  name: string;
  thumbUrl: string;
  fullUrl?: string;
};

export type LeatherTextureSpec = {
  label: string;
  thumbUrl: string;
  fullUrl?: string;
};

export type LeatherSpecs = {
  size: string;
  thickness: string;
  origin: string;
  material: string;
  type: string;
  finish: string;
  grain: string;
  category: string;
  uses: string;
  texture: LeatherTextureSpec;
  specsPdfUrl: string;
  prop65PdfUrl?: string;
};

export type LeatherCollectionDetail = {
  slug: string;
  name: string;
  youtubeVideoId?: string;
  heroPosterUrl: string;
  swatches: readonly LeatherSwatch[];
  specs: LeatherSpecs;
};
