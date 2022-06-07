import { FC } from 'react';

interface ImgProps {
  src: string;
  alt: string;
}

export const Img: FC<ImgProps> = ({ src, alt }) => <img src={src} alt={alt} />;
