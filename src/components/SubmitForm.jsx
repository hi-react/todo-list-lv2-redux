import { useState } from "react";
import { useDispatch } from "react-redux";
// action creator import
import { addTodo } from "../redux/modules/todo";
import { styled } from "styled-components";
import uuid from "react-uuid";

const SubmitForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // dispatch도 가져와야지
  const dispatch = useDispatch();

  // Add 버튼
  const addTodoItemHandler = (event) => {
    // [검증] return을 해주지 않으면, 모두 입력해달라는 알람이 뜨고도 빈 카드를 그대로 붙여넣음!
    if (title.trim() === "" || content.trim() === "") {
      alert("제목과 내용을 모두 입력해주세요.");
      setTitle("");
      setContent("");
      return;
    }

    event.preventDefault();

    dispatch(
      addTodo({
        id: uuid(),
        title,
        content,
        isDone: false,
      })
    );
    setTitle("");
    setContent("");
  };

  return (
    <StAddForm onSubmit={addTodoItemHandler}>
      <label>제목: </label>
      <StInputTitle
        value={title}
        placeholder="제목을 입력해주세요."
        onChange={(event) => setTitle(event.target.value)}
      />
      &nbsp;
      <label>내용: </label>
      <StInputContent
        value={content}
        placeholder="내용을 입력해주세요."
        onChange={(event) => setContent(event.target.value)}
      />
      <StButton>추가하기</StButton>
    </StAddForm>
  );
};

export default SubmitForm;

// styled-components
const StAddForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 120px;

  padding: 0px 35px;

  background-color: #d8e5f7;

  border: 1px solid gray;
  border-radius: 10px;
`;

const StInputTitle = styled.input`
  height: 40px;
  width: 270px;

  padding: 0 12px;

  border: 1px solid rgb(182, 161, 161);
  border-radius: 4px;
`;

const StInputContent = styled.input`
  height: 40px;
  width: 600px;

  padding: 0 12px;

  border: 1px solid rgb(182, 161, 161);
  border-radius: 4px;
`;

const StButton = styled.button`
  height: 40px;
  width: 110px;

  margin-right: 10px;

  border: 1px solid gray;
  border-radius: 4px;

  font-weight: 700;
  font-size: 16px;
  color: black;
  cursor: pointer;

  // hover는 어떻게 하징........
`;
