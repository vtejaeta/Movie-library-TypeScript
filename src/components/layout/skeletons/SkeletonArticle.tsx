import SkeletonElement from "./SkeletonElement";

const SkeletonArticle: React.FC = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-article">
        <SkeletonElement type="title" />
        <div className="skeleton-details">
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
        <div className="skeleton-paragraph">
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
    </div>
  );
};

export default SkeletonArticle;
