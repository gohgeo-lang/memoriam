import { useState } from "react";

// 글 작성 폼 컴포넌트
export default function MemorialForm({ onStorySubmit, onCancel }) {
  const [formData, setFormData] = useState({
    petName: "",
    ownerName: "",
    title: "",
    content: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      // 브라우저 메모리에 임시 URL을 생성하여 미리보기를 보여줌
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStory = {
      id: Date.now(),
      ...formData,
      thumbnailUrl:
        imagePreview || "https://placehold.co/600x400/cccccc/ffffff?text=Image", // 이미지가 없으면 placeholder
      rememberCount: 0,
      comments: [],
    };
    onStorySubmit(newStory);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-gray-50 p-8 rounded-lg"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <input
          name="ownerName"
          value={formData.ownerName}
          onChange={handleInputChange}
          placeholder="보호자 이름"
          required
          className="w-full p-3 border rounded-md"
        />
        <input
          name="petName"
          value={formData.petName}
          onChange={handleInputChange}
          placeholder="반려동물 이름"
          required
          className="w-full p-3 border rounded-md"
        />
      </div>

      <div>
        <input
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          placeholder="이야기 제목"
          required
          className="w-full p-3 border rounded-md"
        />
      </div>

      <div>
        <textarea
          name="content"
          value={formData.content}
          onChange={handleInputChange}
          placeholder="아이와의 소중한 추억을 남겨주세요..."
          required
          rows="8"
          className="w-full p-3 border rounded-md"
        ></textarea>
      </div>

      <div>
        <label
          htmlFor="imageUpload"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          사진 등록
        </label>
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="미리보기"
                className="mx-auto h-48 w-auto rounded-md"
              />
            ) : (
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="imageUploadInput"
                className="relative cursor-pointer bg-white rounded-md font-medium text-[#7b5449] hover:text-[#694237] focus-within:outline-none"
              >
                <span>파일 업로드</span>
                <input
                  id="imageUploadInput"
                  name="imageUpload"
                  type="file"
                  accept="image/*"
                  className="sr-only"
                  onChange={handleImageChange}
                />
              </label>
              <p className="pl-1">또는 파일을 끌어오세요</p>
            </div>
            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 border rounded-md text-gray-700 hover:bg-gray-100"
        >
          취소
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-[#7b5449] text-white rounded-md hover:bg-[#694237]"
        >
          등록하기
        </button>
      </div>
    </form>
  );
}
