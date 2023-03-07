import styles from './Avatar.module.css';
import { ImgHTMLAttributes } from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export function Avatar({ src, hasBorder, alt, ...props }: AvatarProps) {

    const Border = hasBorder !== false

    return(
        <img className={Border ? styles.avatarWithBorder : styles.avatar} src={src} alt={alt} {...props} />
    )
}