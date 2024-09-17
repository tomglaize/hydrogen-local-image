import { Image } from '@shopify/hydrogen'
import imageUrl from '~/assets/image.png'

const imageData = {
  url: imageUrl,
  width: 150,
  height: 150,
};

export default function Page() {
  return (
    <div>
      <Image data={imageData} />
      <img src={imageUrl}/>
    </div>
  );
}
