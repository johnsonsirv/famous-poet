export const translatePath = '/translate';
export const rawPath = '/raw';
export const mediaPath = '/media';
export const scriptPath = '/text';

export const getRawRemotePath = {
  audio: `${rawPath}${mediaPath}`,
  script: `${rawPath}${scriptPath}`,
};

export const getTranslateRemotePath = {
  audio: `${translatePath}${mediaPath}`,
  script: `${translatePath}${scriptPath}`,
};
