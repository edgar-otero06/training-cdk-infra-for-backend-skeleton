export enum Critical {
  YES = 'Yes',
  NO = 'No',
}

export interface IResourceTags {
  ProjectName: string;
  Environment: string;
  Owner: string;
  Critical: Critical;
  [key: string]: string;
}

export interface ITaggableResource {
  addTags?: (tags: { [key: string]: string }) => void;
  tags?: { [key: string]: string };
}
