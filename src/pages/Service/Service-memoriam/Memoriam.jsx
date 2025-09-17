import { useState, useEffect, useCallback } from "react";
import Section from "../../../components/Section/Section";
import Card from "../../../components/Card/Card";
// No need to import "./Memoriam.css" anymore

// Temporary data. In a real app, this would come from a server.
const initialMemories = [
  {
    id: 1,
    petName: "별이",
    lived: "2010 – 2024",
    title: "나의 영원한 별, 별이에게",
    story:
      "햇살 좋은 오후, 네가 내 무릎에서 잠들던 그 순간을 잊을 수 없어. 너의 따뜻한 체온과 부드러운 숨소리는 내게 가장 큰 위로였어. 지금도 눈을 감으면 네가 곁에 있는 것 같아. 별아, 그곳에서는 아프지 말고 마음껏 뛰어놀아. 영원히 사랑해.",
    imageUrl: "https://via.placeholder.com/300x200/FFB6C1/FFFFFF?text=별이",
    empathyCount: 12,
  },
  {
    id: 2,
    petName: "뭉치",
    lived: "2012 – 2025",
    title: "내 동생 뭉치야, 잘 지내?",
    story:
      "처음 우리 집에 오던 날, 작고 하얀 솜뭉치 같던 너의 모습을 기억해. 겁이 많아서 내 뒤에만 숨던 네가 언제 이렇게 늠름하게 자랐을까. 너와 함께한 모든 산책길, 모든 장난감 던지기 놀이가 선명해. 보고 싶다, 뭉치야.",
    imageUrl: "https://via.placeholder.com/300x200/87CEEB/FFFFFF?text=뭉치",
    empathyCount: 8,
  },
];

export default function Memoriam() {
  const [memories, setMemories] = useState(initialMemories);
  const [selectedMemory, setSelectedMemory] = useState(null);

  // Empathy button click handler
  const handleEmpathyClick = (id, e) => {
    e.stopPropagation();
    setMemories((prevMemories) =>
      prevMemories.map((memory) =>
        memory.id === id
          ? { ...memory, empathyCount: memory.empathyCount + 1 }
          : memory
      )
    );
  };

  // Open the modal
  const openModal = (memory, e) => {
    e.stopPropagation();
    setSelectedMemory(memory);
  };

  // Close the modal
  const closeModal = useCallback(() => {
    setSelectedMemory(null);
  }, []);

  // Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (selectedMemory) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMemory, closeModal]);

  return (
    // The parent div can be styled as needed, e.g., bg-gray-50
    <div className="memoriam-page">
      <Section
        className="memoriam-intro text-center py-12"
        title="우리의 작은 별들을 기억하며"
      >
        <p className="mb-6">
          이곳은 아이와의 소중한 추억을 나누고,
          <br />
          서로의 슬픔을 보듬는 따뜻한 공간입니다.
        </p>
        {/* Assuming you have a base style for 'primary-btn' or you can style it here */}
        <button className="primary-btn bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          나의 추억 남기기
        </button>
      </Section>

      <Section title="추억의 벽" className="px-4 py-8">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 mt-5">
          {memories.map((memory) => (
            <Card
              key={memory.id}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white flex flex-col"
            >
              <img
                src={memory.imageUrl}
                alt={memory.petName}
                className="w-full h-52 object-cover"
                onError={(e) => {
                  e.target.src =
                    "https://via.placeholder.com/300x200/CCCCCC/FFFFFF?text=이미지+없음";
                }}
              />
              <div className="p-4 flex-grow">
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                  {memory.title}
                </h3>
                <p className="text-gray-600 text-sm mb-2.5">
                  {memory.petName} ({memory.lived})
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  {memory.story.substring(0, 80)}...
                </p>
              </div>
              <div className="flex justify-between items-center p-4 border-t border-gray-200">
                <button
                  className="bg-[#ff6b6b] hover:bg-[#ff5252] text-white py-2 px-4 rounded text-sm transition-colors"
                  type="button"
                  onClick={(e) => handleEmpathyClick(memory.id, e)}
                >
                  ❤️ 공감 ({memory.empathyCount})
                </button>
                <button
                  className="bg-[#4dabf7] hover:bg-[#339af0] text-white py-2 px-4 rounded text-sm transition-colors"
                  type="button"
                  onClick={(e) => openModal(memory, e)}
                >
                  이야기 들어보기
                </button>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Modal */}
      {selectedMemory && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg p-5 max-w-lg w-11/12 max-h-[80vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="absolute top-2.5 right-4 bg-transparent border-none text-2xl cursor-pointer text-gray-500 hover:text-black"
              onClick={closeModal}
              aria-label="모달 닫기"
            >
              &times;
            </button>
            <img
              src={selectedMemory.imageUrl}
              alt={selectedMemory.petName}
              className="w-full h-52 object-cover rounded mb-4"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/500x200/CCCCCC/FFFFFF?text=이미지+없음";
              }}
            />
            <h2 className="text-2xl font-bold mb-2">{selectedMemory.title}</h2>
            <p className="text-gray-600 text-sm mb-4">
              {selectedMemory.petName} ({selectedMemory.lived})
            </p>
            <p className="leading-relaxed text-gray-800">
              {selectedMemory.story}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
