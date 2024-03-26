import PhocaImg from './PhocaImg';
import ArtistLogo from './ArtistLogo';
import ArtistInfo from './ArtistInfo';
import PhocaTitle from './PhocaTitle';
import PhocaLikeButton from './PhocaLikeButton';
import PhocaLikeCount from './PhocaLikeCount';
import { useNavigate } from 'react-router-dom';

export default function PhocaItem({
  title,
  titleClass,
  phocaImgSrc,
  logoImgSrc,
  imgClass,
  groupName,
  memberName,
  likeCount,
  infoClass,
  groupClass,
  memberClass,
  linkClass,
  logoImgClass,
  phocaId,
}) {
  let navigate = useNavigate();

  const handleNavigate = (e) => {
    // 클릭 이벤트나 엔터키 이벤트인 경우에만 처리
    if (e.type === 'click' || (e.type === 'keydown' && e.key === 'Enter')) {
      // Like 버튼에 의한 이벤트가 아닌 경우에만 네비게이션 실행
      if (!e.target.closest('.like-button')) {
        navigate(`/exchangeDetail/${phocaId}`);
      }
    }
  };

  return (
    <div
      className={`${linkClass} relative mx-1 my-1 py-1`}
      onClick={handleNavigate}
      onKeyDown={handleNavigate}
      aria-label={`${title} 카드 디테일 페이지로 이동`}
      tabIndex={0}
      role="button"
    >
      <PhocaImg
        phocaImgSrc={phocaImgSrc}
        phocaImgAlt={title}
        imgClass={imgClass}
      />

      <div className="flex flex-row items-start justify-start gap-2 bg-blue-200  ">
        <ArtistLogo
          logoImgSrc={logoImgSrc}
          groupName={groupName}
          logoImgClass={logoImgClass}
        />
        <ArtistInfo
          groupName={groupName}
          memberName={memberName}
          infoClass={infoClass}
          groupClass={groupClass}
          memberClass={memberClass}
        />
      </div>
      <div className="flex flex-col items-start">
        <PhocaTitle title={title} titleClass={titleClass} />
        <PhocaLikeCount likeCount={likeCount} />
      </div>
      <div className="like-button absolute right-2 top-2 p-2">
        <PhocaLikeButton phocaId={phocaId} />
      </div>
    </div>
  );
}
