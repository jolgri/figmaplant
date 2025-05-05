import { useState } from "react";
import emptySvg from "../assets/empty.svg";

export default function Image({ src, alt, className }) {
    const [imageSrc, setImageSrc] = useState(src);
    return (
        <img
            src={imageSrc}
            alt={alt}
            className={className}
            onError={() => setImageSrc(emptySvg)}
        />
    )
}