const imageLoad = (url: string): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = url;
  });
};

export const imageToRaw = async (imageFile: File) => {
  console.time("Converted image to bytes");
  const url = URL.createObjectURL(imageFile);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Unable to create Canvas Context");
  }

  const image = await imageLoad(url);
  ctx.drawImage(image, 0, 0);
  const imageData = ctx.getImageData(0, 0, image.height, image.width);

  console.timeEnd("Converted image to bytes");

  return imageData;
};
