export type StaticImageData = {
  src: string
  height: number
  width: number
};

export type ProjectDataType = {
  title: string;
  gist: string;
  proj_desc: string;
  my_work: string;
  tech_stack: string[];
  github: string;
  screenshots: {
    src: StaticImageData;
    alt: string;
  }[];
};