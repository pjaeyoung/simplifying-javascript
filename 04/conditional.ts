const userConfig1 = {};
const userConfig2 = {
  images: [],
};
const userConfig3 = {
  images: 'me.png',
};
const userConfig4 = {
  images: ['me.png', 'work.gif'],
};

function getFirstImage(userConfig: { images: string[] }): string {
  if (userConfig.images) {
    if (userConfig.images.length) {
      return userConfig.images[0];
    }
  }

  return 'default.png';
}

// js일 경우 배열 타입 검사 필요
function getFirstImageUpdated(userConfig) {
  if (Array.isArray(userConfig.images) && userConfig.images.length > 0) {
    return userConfig.images[0];
  }
  return 'default.png';
}

// ts일 경우 배열 길이만 검사
function getFirstImageUpdatedTS(userConfig: { images: string[] }): string {
  return userConfig.images.length > 0 ? userConfig.images[0] : 'default.png';
}

export function getFirstGIF(userConfig: { images: string[] }): string {
  if (userConfig.images.length === 0) {
    return 'default.gif';
  }
  const regex = new RegExp(/\.gif$/);
  return userConfig.images.find((aImage) => regex.test(aImage)) || 'default.gif';
}
