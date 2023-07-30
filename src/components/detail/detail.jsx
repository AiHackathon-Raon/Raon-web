import React from "react";
import * as D from "./detail.style";

function Detail() {
  return (
    <D.detailLayout>
      <D.detailPhotoBox>img</D.detailPhotoBox>
      <D.onlySameSchoolBox>같은 학교만 보기</D.onlySameSchoolBox>
    </D.detailLayout>
  );
}
export default Detail;
