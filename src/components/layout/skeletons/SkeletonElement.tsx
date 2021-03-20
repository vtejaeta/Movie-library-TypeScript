import React from "react";
import '../../../assets/css/Skeleton.css'

interface SkeletonElementProps{
    type:string
}

const SkeletonElement: React.FC<SkeletonElementProps> = ({ type }) => {
  return <div className={`skeleton ${type}`}></div>;
};

export default SkeletonElement;
