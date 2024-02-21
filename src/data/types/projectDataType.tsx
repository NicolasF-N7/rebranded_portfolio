export type StaticImageData = {
  src: string
  height: number
  width: number
};

export type ProjectDataType = {
  title: string;
  project_recipient: string;
  gist: string;
  proj_desc: string;
  my_work: string;
  tech_stack: string[];
  live_preview: string,
  github: string;
  thumbnail: {
    src: StaticImageData;
    alt: string;
  },
  screenshots: {
    src: StaticImageData;
    alt: string;
  }[];
};