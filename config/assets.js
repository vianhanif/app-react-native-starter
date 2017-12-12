import { Asset, Image, Font } from 'expo'
import Config from './index'

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}


async function loadAssetsAsync () {
  const imageAssets = cacheImages(Config.Asset.Images);

  const fontAssets = cacheFonts(Config.Asset.Fonts);

  await Promise.all([...imageAssets, ...fontAssets]);
}

export default loadAssetsAsync
