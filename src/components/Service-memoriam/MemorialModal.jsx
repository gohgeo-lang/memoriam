import { useEffect } from "react";

// 이야기의 전체 내용을 보여주는 모달 컴포넌트
export default function MemorialModal({ story, onClose, onCommentSubmit }) {
  // 모달이 열렸을 때 배경 스크롤을 막는 효과
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleComment = (e) => {
    e.preventDefault();
    const commentText = e.target.elements.comment.value;
    if (commentText) {
      onCommentSubmit(story.id, commentText);
      e.target.reset();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫히지 않도록 함
      >
        <header className="p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-bold">{story.title}</h2>
          <button onClick={onClose} className="text-2xl">
            &times;
          </button>
        </header>

        <main className="p-6 overflow-y-auto">
          <img
            src={story.thumbnailUrl}
            alt={story.petName}
            className="w-full h-64 object-cover rounded-md mb-4"
          />
          <p className="text-gray-700 whitespace-pre-wrap">{story.content}</p>

          <div className="mt-8">
            <h4 className="font-bold mb-4">댓글</h4>
            <div className="space-y-4">
              {story.comments.map((comment) => (
                <div key={comment.id} className="bg-gray-50 p-3 rounded-md">
                  <p className="font-semibold text-sm">{comment.author}</p>
                  <p className="text-gray-600">{comment.text}</p>
                </div>
              ))}
            </div>
            <form onSubmit={handleComment} className="mt-4 flex gap-2">
              <input
                type="text"
                name="comment"
                placeholder="따뜻한 위로의 말을 남겨주세요."
                className="flex-grow border rounded-md p-2 focus:ring-2 focus:ring-[#7b5449] focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#7b5449] text-white px-4 py-2 rounded-md hover:bg-[#694237] transition-colors"
              >
                등록
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
