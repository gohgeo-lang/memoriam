import { Stage, Layer, Rect, Image as KonvaImage } from "react-konva";
import useImage from "use-image";

export default function PreviewCanvas({
  image,
  background,
  brightness,
  contrast,
  saturation,
  temperature,
  sharpness,
}) {
  const [img] = useImage(image);
  return (
    <Stage width={400} height={400}>
      <Layer>
        <Rect width={400} height={400} fill={background || "#fff"} />

        {img && (
          <KonvaImage
            image={img}
            width={400}
            height={400}
            filters={[
              Konva.Filters.Brighten,
              Konva.Filters.Contrast,
              Konva.Filters.HSV,
              Konva.Filters.Convolve,
            ]}
            brightness={brightness / 100} // -1 ~ 1
            contrast={contrast / 100} // -100 ~ 100
            saturation={saturation / 100} // -1 ~ 1
            hue={temperature / 100}
            convolutionKernel={[0, -1, 0, -1, 5 + sharpness, -1, 0, -1, 0]}
          />
        )}
      </Layer>
    </Stage>
  );
}
