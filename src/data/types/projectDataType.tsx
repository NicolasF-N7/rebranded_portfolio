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
  github: string;
  thumbnail: StaticImageData,
  screenshots: {
    src: StaticImageData;
    alt: string;
  }[];
};