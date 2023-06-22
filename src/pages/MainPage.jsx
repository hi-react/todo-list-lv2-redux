import { styled } from "styled-components";
import SubmitForm from "../components/SubmitForm";
import TodoList from "../components/TodoList";

// submit 데이터 store에서 가져옴
const MainPage = () => {
  return (
    <StLayout>
      <StTitle>My Todo List</StTitle>
      <SubmitForm />
      <StTodoContainer>
        <TodoList isDone={false} />
        <TodoList isDone={true} />
      </StTodoContainer>
    </StLayout>
  );
};

export default MainPage;

// styled-components
const StLayout = styled.section`
  max-width: 1200px;
  min-width: 800px;

  margin: 0 auto;
`;

const StTitle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 50px 10px;
  font-size: 32px;
  font-weight: 800;
`;

const StTodoContainer = styled.main`
  display: flex;
  flex-direction: column;

  margin: 15px auto;
  padding: 10px 30px;

  background-color: #f4f7fc;

  border: 1px solid gray;
  border-radius: 10px;
`;
