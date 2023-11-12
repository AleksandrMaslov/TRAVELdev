const useGoogleDriveImage = (src: string | undefined): string | undefined => {
  if (!src) return src

  if (src.includes('drive.google.com'))
    src = src.split('/d/')[1].split('/view?')[0]

  return `https://drive.google.com/uc?id=${src}`
}

export default useGoogleDriveImage
