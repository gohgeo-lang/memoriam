export default function MemorialCard({ story, onOpenModal, onRemember }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-transform hover:scale-105 duration-300">
      <img
        className="h-48 w-full object-cover"
        src={story.thumbnailUrl}
        alt={story.petName}
      />
      <div className="p-6">
        <div className="uppercase tracking-wide text-sm text-[#7b5449] font-semibold">
          {story.ownerName}님의 이야기
        </div>
        <h3 className="block mt-1 text-lg leading-tight font-medium text-black">
          {story.title}
        </h3>
        <p className="mt-2 text-gray-500 truncate">{story.content}</p>
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => onRemember(story.id)}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <i className="bi bi-suit-heart-fill text-red-400"></i>
            함께 기억하기 ({story.rememberCount})
          </button>
          <button
            onClick={() => onOpenModal(story)}
            className="text-sm font-semibold text-[#7b5449] hover:underline"
          >
            이 이야기 들어보기
          </button>
        </div>
      </div>
    </div>
  );
}
