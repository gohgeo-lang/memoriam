import { useState } from "react";
import Section from "../../../components/Section/Section";
import MemorialCard from "../../../components/Service-memoriam/MemorialCard.jsx";
import MemorialModal from "../../../components/Service-memoriam/MemorialModal.jsx";

const initialStories = [
  {
    id: 1,
    petName: "댕청이",
    ownerName: "김집사",
    thumbnailUrl: "/img/pet.jpg",
    title: "내새깽이, 하늘의 별이 되다",
    content: `댕청아, 널 처음 만난 날을 기억해. 작고 하얀 솜뭉치 같던 네가 내게 와서 가족이 되었지.
    
너와 함께한 15년은 내 인생 가장 큰 선물이었어. 너의 발소리, 너의 꼬리치던 모습, 너의 따뜻한 체온... 모든 것이 아직도 선명해. 
    
하늘에서는 아프지 말고, 친구들이랑 신나게 뛰어놀아. 언젠가 다시 만날 날을 기다릴게. 사랑해.`,
    rememberCount: 128,
    comments: [
      { id: 1, author: "이웃주민", text: "좋은 곳으로 갔을 거예요. 힘내세요." },
      {
        id: 2,
        author: "친구",
        text: "함께한 기억은 영원할 거예요. 댕청이도 행복했을 겁니다.",
      },
    ],
  },
  {
    id: 2,
    petName: "야옹이",
    ownerName: "박애옹",
    thumbnailUrl: "https://placehold.co/600x400/a0a0a0/ffffff?text=Yaong",
    title: "무릎 위에서 잠들던 너",
    content:
      "우리 야옹이는 세상에서 가장 애교 많은 고양이였어요. 제 무릎은 항상 야옹이 차지였죠. 골골송을 불러주던 네가 너무 그립다.",
    rememberCount: 94,
    comments: [
      {
        id: 1,
        author: "랜선집사",
        text: "사진만 봐도 너무 사랑스럽네요. ㅠㅠ",
      },
    ],
  },
  // ... more stories
];

export default function Memoriam() {
  const [stories, setStories] = useState(initialStories);
  const [selectedStory, setSelectedStory] = useState(null);

  const handleOpenModal = (story) => {
    setSelectedStory(story);
  };

  const handleCloseModal = () => {
    setSelectedStory(null);
  };

  const handleRememberClick = (storyId) => {
    setStories((prevStories) =>
      prevStories.map((story) =>
        story.id === storyId
          ? { ...story, rememberCount: story.rememberCount + 1 }
          : story
      )
    );
  };

  const handleCommentSubmit = (storyId, commentText) => {
    const newComment = {
      id: Date.now(), // 간단한 ID 생성
      author: "방문자", // 실제로는 로그인 정보 등을 활용해야 함
      text: commentText,
    };

    setStories((prevStories) =>
      prevStories.map((story) => {
        if (story.id === storyId) {
          const updatedStory = {
            ...story,
            comments: [...story.comments, newComment],
          };
          // 모달이 열려있다면, 선택된 스토리 정보도 업데이트
          if (selectedStory && selectedStory.id === storyId) {
            setSelectedStory(updatedStory);
          }
          return updatedStory;
        }
        return story;
      })
    );
  };

  return (
    <div className="memoriam-page pt-20">
      <Section title="우리의 이야기">
        <p className="mb-10 text-gray-600">
          이곳은 소중한 아이들을 기억하고, 따뜻한 위로를 나누는 공간입니다.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <MemorialCard
              key={story.id}
              story={story}
              onOpenModal={handleOpenModal}
              onRemember={handleRememberClick}
            />
          ))}
        </div>
      </Section>

      {selectedStory && (
        <MemorialModal
          story={selectedStory}
          onClose={handleCloseModal}
          onCommentSubmit={handleCommentSubmit}
        />
      )}
    </div>
  );
}
