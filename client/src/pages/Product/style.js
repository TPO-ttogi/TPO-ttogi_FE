import styled from "@emotion/styled";

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
  .leftTextBox {
    width: 100%;
    display: flex;
    justify-content: start;
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

export const BotText = styled.div`
  border: 0.5px solid black;
  border-radius: 10px;
  max-width: 200px;
  padding: 10px 20px;
  box-sizing: border-box;
  font-family: "HakgyoansimWoojuR";
  font-size: 12px;
  margin-bottom: 10px;
`;
