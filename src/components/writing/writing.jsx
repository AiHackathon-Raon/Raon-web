import React, { useState, useRef } from "react";
import * as W from "./writing.style";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import plusImg from "../../asset/img/plusImg.svg";
import uploadButton from "../../asset/img/uploadButton.svg";

function Writing() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };
  return (
    <>
      <W.mainLayout>
        <Header></Header>
        <W.writing>
          <W.fileInput
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileChange}
          />
          <W.fileInputLabel onClick={handleChooseFile}>
            <W.uploadImg src={plusImg}></W.uploadImg>
          </W.fileInputLabel>
          {previewUrl && <W.ImagePreview src={previewUrl} alt="미리보기" />}
          <W.writeTitle
            type="text"
            placeholder="제목을 입력해주세요"
          ></W.writeTitle>
          <W.writeDetail
            type="text"
            placeholder="내용을 입력해주세요"
          ></W.writeDetail>
          <W.uploadButton onClick={() => navigate("/main")}>
            <W.buttonImg src={uploadButton}></W.buttonImg>
          </W.uploadButton>
        </W.writing>
      </W.mainLayout>
    </>
  );
}
export default Writing;
