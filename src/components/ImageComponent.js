import Image from "next/image";
import React from "react";

const ImageComponent = ({ ImageUrl }) => {
  return (
    <div>
      <Image
        src={ImageUrl}
        alt="Page heading"
        style={{ width: "100%", height: "auto" }}
        sizes="(max-width: 768px) 100vw, (max-width: 1220px) 50vw, 100vw"
      />
    </div>
  );
};

export default ImageComponent;
