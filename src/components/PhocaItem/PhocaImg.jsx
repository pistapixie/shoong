import PhocaLikeButton from './PhocaLikeButton';

export default function PhocaImg() {
  return (
    <div className="mb-4 min-w-[176px] mobile:w-44 relative">
      <img
        src="../../../public/phoca.jpeg "
        style={{ borderRadius: '10px' }}
        className="h-full w-full object-cover"
        alt="포토카드"
      />
      <div className="absolute bottom-3 right-4">
        <PhocaLikeButton />
      </div>
    </div>
  );
}
