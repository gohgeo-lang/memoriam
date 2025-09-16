import { Stage, Layer, Image as KonvaImage } from "react-konva";
import useImage from "use-image";

export default function PreviewCanvas({ image }) {
  const [img] = useImage(image); // 이미지 로드 훅

  return (
    <Stage width={600} height={400}>
      <Layer>
        {img && <KonvaImage image={img} width={400} filters={[]} />}
      </Layer>
    </Stage>
  );
}
