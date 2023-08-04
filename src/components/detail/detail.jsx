import React, { useState } from "react";
import * as D from "./detail.style";
import HeartButton from "./HeartIcon";
import detailBanner from "../../asset/img/detailBanner.svg";
import profile1 from "../../asset/img/profile1.svg";
import commentUplodad from "../../asset/img/commentUpload.svg";

function Detail() {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState(0);
  const [comments, setComments] = useState([]);

  const toggleLike = () => {
    setLike((prevLike) => !prevLike);
    setLikeCount((prevCount) => (like ? prevCount - 1 : prevCount + 1));
  };

  const handleCommentUpload = (author, content) => {
    const newComment = {
      author: author,
      content: content,
    };
    setComments((prevComments) => [...prevComments, newComment]);
    setCommentCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <D.detailLayout>
        <D.detailPhotoBox src={detailBanner} />
        <D.postingArea>
          <D.areaViewOptions>같은 학교만 보기</D.areaViewOptions>
          <D.postTitle>글 제목</D.postTitle>
          <D.postAuthor>작성자</D.postAuthor>
          <D.areaDividingLine />
          <D.postContent>
            글내용이다 글내용이야 대충 아무말 대잔치 어쩌고 저쩌고 저쩌고 어쩌고
            자동줄바꿈 테스트 할려면 아직 글씨를 더 써야하는데 할 말이 없네 이제
            됐겠지
          </D.postContent>
        </D.postingArea>
        <HeartButton like={like} onClick={toggleLike} likeCount={likeCount} />
        <D.areaDividingLine />
        <D.commentsArea>
          <D.commentTitles>댓글</D.commentTitles>
          <D.commentNumber>{commentCount}개</D.commentNumber>
          {comments.map((comment, index) => (
            <CommentSection
              key={index}
              author={comment.author}
              content={comment.content}
            />
          ))}
        </D.commentsArea>
        <D.areaDividingLine />
        <CommentWritingArea onCommentUpload={handleCommentUpload} />
      </D.detailLayout>
    </>
  );
}

function CommentSection({ author, content }) {
  return (
    <>
      <D.commentSection>
        <D.commentAuthorProfile src={profile1} />
        <D.commentInfo>
          <D.commentAuthorContainer>
            <D.commentAuthor>{author}</D.commentAuthor>
          </D.commentAuthorContainer>
          <D.comment>{content}</D.comment>
        </D.commentInfo>
      </D.commentSection>
    </>
  );
}

function CommentWritingArea({ onCommentUpload }) {
  const [author] = useState("내이름");
  const [content, setContent] = useState("");

  const handleCommentSubmit = () => {
    onCommentUpload(author, content);
    setContent("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCommentSubmit();
    }
  };

  return (
    <>
      <D.CommentWritingArea>
        <D.myProfile src={profile1} />
        <D.myCommentInfo>
          <D.myName>내이름</D.myName>
          <D.myComment
            type="text"
            placeholder="내용을 입력하세요."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onKeyPress={handleKeyPress}
          ></D.myComment>
        </D.myCommentInfo>
        <D.commentUploadButton>
          <D.commentUploadImg
            src={commentUplodad}
            onClick={handleCommentSubmit}
          />
        </D.commentUploadButton>
      </D.CommentWritingArea>
    </>
  );
}

export default Detail;
