import { Stage, Layer, Rect, Image as KonvaImage } from "react-konva";
import Konva from "konva";
import useImage from "use-image";
import { useRef, useEffect } from "react";

export default function PreviewCanvas({
  image,
  background,
  brightness,
  contrast,
  saturation,
  temperature,
  sharpness,
  currentPreset,
}) {
  const [img] = useImage(image);
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current || !img) return;

    const node = imgRef.current;

    try {
      node.cache();

      let filters;
      switch (currentPreset) {
        case "grayscale":
          filters = [Konva.Filters.Grayscale];
          break;
        case "sepia":
          filters = [Konva.Filters.Sepia];
          break;
        case "blur":
          filters = [Konva.Filters.Blur];
          node.blurRadius(8);
          break;
        case "invert":
          filters = [Konva.Filters.Invert];
          break;
        case "noise":
          filters = [Konva.Filters.Noise];
          node.noise(0.3);
          break;
        default:
          filters = [
            Konva.Filters.Brighten,
            Konva.Filters.Contrast,
            Konva.Filters.HSV,
            Konva.Filters.Convolve,
          ];
      }

      node.filters(filters);

      if (filters.includes(Konva.Filters.Brighten)) {
        node.brightness(brightness / 100);
      }
      if (filters.includes(Konva.Filters.Contrast)) {
        node.contrast(contrast / 100);
      }
      if (filters.includes(Konva.Filters.HSV)) {
        node.saturation(saturation / 100);
        node.hue(temperature);
      }
      if (filters.includes(Konva.Filters.Convolve)) {
        node.convolutionKernel([
          0,
          -1,
          0,
          -1,
          5 + sharpness / 10,
          -1,
          0,
          -1,
          0,
        ]);
      }

      node.getLayer()?.batchDraw();
    } catch (err) {
      console.error("필터 적용 오류:", err);
    }
  }, [
    img,
    brightness,
    contrast,
    saturation,
    temperature,
    sharpness,
    currentPreset,
  ]);

  return (
    <Stage width={600} height={750}>
      <Layer>
        <Rect width={600} height={750} fill={background || "#fff"} />
        {img && (
          <KonvaImage
            ref={imgRef}
            image={img}
            width={600}
            height={750}
            x={0}
            y={0}
          />
        )}
      </Layer>
    </Stage>
  );
}
