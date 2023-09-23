import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const toRight = keyframes`
    from{
        left:-300px;
    }
    to{
        left:0px;
    }
`;

const toLeft = keyframes`
    from{
        right:-300px;
    }
    to{
        right:0;
    }
`;

const toLong = keyframes`
  from{
    width: 0;
  }
  
`;

export const Container = styled.div`
  padding: 20px;
`;
export const Header = styled.div`
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Keyword = styled.div`
  width: 109px;
  height: 35px;
  border-radius: 27px;
  border: 1px solid #1d73ba;
  background-color: #eaf6ff;
  color: #1d73ba;
  font-family: "Inter";
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 34px;
  flex-direction: column;
  .title {
    font-family: "EF_jejudoldam";
    font-size: 24px;
  }
  .subTitle {
    font-family: "HakgyoansimWoojuR";
    font-size: 12px;
    margin-top: 6px;
    margin-bottom: 28px;
  }
`;

export const LeftTextBox = styled.div`
  width: 100%;
  position: relative;
  padding-left: 20px;
  margin: 10px 0;
  left: -300px;
  animation: ${toRight};
  animation-fill-mode: both;
  animation-duration: 1s;
  &.signal {
    animation: ${(props) => (props.start ? `${toRight}` : "none")};
  }
  img {
    position: absolute;
    top: -15px;
    left: 0;
  }
`;

export const RightTextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  position: relative;
  right: -300px;
  animation: ${toLeft};
  animation-fill-mode: both;
  animation-duration: 1s;
  &.signal {
    animation: ${(props) => (props.start ? `${toLeft}` : "none")};
  }
`;

export const Detail = styled.div`
  width: fit-content;
  height: fit-content;
  border: 0.5px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  div {
    padding: 10px;
    height: 33px;
    line-height: 33px;
    font-family: "Inter";
    border-top: 0.5px solid black;
  }
`;

export const Message = styled.div`
  border: 0.5px solid black;
  border-radius: 10px;
  max-width: 200px;
  padding: 10px 20px;
  box-sizing: border-box;
  font-family: "HakgyoansimWoojuR";
  font-size: 12px;
  margin-bottom: 10px;
`;

export const Graph = styled.div`
  display: flex;
  justify-content: center;
  height: 20px;
  width: ${(props) => 180 * props.percent * 0.01}px;
  background-color: ${(props) => props.color};
  margin-right: 5px;
  animation: ${toLong};
  animation-delay: 4.2s;
  animation-fill-mode: both;
  animation-duration: 1.5s;
`;

export const AnswerBox = styled.div`
  display: flex;
  animation: ${toLeft} 1s both;
  flex-direction: column;
  border: 0.5px solid black;
  border-radius: 10px;
  padding: 7px 10px;
  position: relative;
  right: -300px;
  //animation: ${(props) => (props.start ? `${toLeft} 1s both` : "none")};
`;

export const SpicyAnswer = styled.div`
  max-width: 200px;
  padding: 10px 14px;
  border-radius: 10px;
  box-sizing: border-box;
  font-family: "HakgyoansimWoojuR";
  font-size: 12px;
  margin-bottom: 3px;
  background-color: ${(props) =>
    props.answerIs === "Yes"
      ? "#FF9F9F"
      : props.answerIs === "SortOf"
      ? "#FFED8E"
      : "#A4EA82"};
`;
