interface IPhoto {
  title: string;
  src: string;
  location: [number, number];
  photographer?: string;
  [key: string]: any;
}

const landscape: IPhoto = {
  title: 'Landscape',
  photographer: 'Nathan',
  equipment: 'Canon',
  format: 'digital',
  src: '/landscape-nm.jpg',
  location: [32.712222, -103.1405556],
};

function displayPhoto(photo: IPhoto): string {
  const title = photo.title;
  const photographer = photo.photographer || 'Anonymous';
  const location = photo.location;
  const url = photo.src;
  const copy = { ...photo };

  delete copy.title;
  delete copy.photographer;
  delete copy.location;
  delete copy.src;

  const additional = Object.keys(copy).map((key) => `${key}`);

  return `
      <img alt="${title} 사진 ${photographer} 촬영" src="${url}"/>
      <div>${title}</div>
      <div>${photographer}</div>
      <div>위도: ${location[0]}</div>
      <div>경도: ${location[1]}</div>
      <div>${additional.join(' <br/> ')}</div>
      `;
}

function displayPhotoUpdated({ title, location: [latitude, longitude], src: url, photographer = 'Anonymous', ...additional }: IPhoto): string {
  return `
      <img alt="${title} 사진 ${photographer} 촬영" src="${url}"/>
      <div>${title}</div>
      <div>${photographer}</div>
      <div>위도: ${latitude}</div>
      <div>경도: ${longitude}</div>
      <div>${Object.keys(additional)
        .map((key) => `${key}`)
        .join(' <br/> ')}</div>
      `;
}

console.log(displayPhotoUpdated(landscape));

export {};
