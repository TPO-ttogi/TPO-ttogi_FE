import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import {
  Container,
  Header,
  Keyword,
  Main,
  Detail,
  Message,
  LeftTextBox,
  Graph,
  RightTextBox,
  AnswerBox,
  SpicyAnswer,
} from "./style.js";

const Product = () => {
  const navigate = useNavigate();
  const [genAIAnswer, setGenAIAnswer] = useState("...");
  const [userSpicyAnswer, setUserSpicyAnswer] = useState();

  const getGenAIAnswer = async () => {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        messages: [{ role: "user", content: "What is Tteok bokki" }],
        model: "gpt-3.5-turbo",
      },
      {
        headers: {
          Authorization: "Bearer " + process.env.REACT_APP_GEN_AI_KEY,
          "Content-Type": "application/json",
        },
      }
    );

    setGenAIAnswer(response?.data.choices[0]?.message?.content);
  };

  useEffect(() => {
    getGenAIAnswer();
  }, []);
  useEffect(() => {
    console.log(genAIAnswer);
  }, [genAIAnswer]);

  return (
    <>
      <Container>
        <Header>
          <img
            src="/assets/icon/back.svg"
            width={28}
            height={17}
            onClick={() => navigate("/productList")}
          />
          <img
            src="/assets/icon/home.svg"
            width={28}
            height={31}
            onClick={() => navigate("/")}
          />
        </Header>
        <Keyword>after school</Keyword>
        <Main>
          <div className="title">Tteok bokki</div>
          <div className="subTitle">(떡볶이)</div>
          <Detail>
            <img
              src="http://www.ottogi.co.kr/pds/product/2021-07-28_60726959[9].jpg"
              width={147}
              height={147}
            />
            <div className="name">SNACK SHOP RICE TTEOK-BOKKI</div>
          </Detail>
          <LeftTextBox>
            <img src="/assets/image/bot_profile.svg" width={39} height={36} />
            <Message>우리 떡볶이 먹으러갈래?</Message>
          </LeftTextBox>
          <RightTextBox style={{ animationDelay: "1s" }}>
            <Message>떡볶이가 뭐야?</Message>
          </RightTextBox>
          <LeftTextBox className="signal" start={genAIAnswer !== "..."}>
            <img src="/assets/image/bot_profile.svg" width={39} height={36} />
            <Message>{genAIAnswer}</Message>
          </LeftTextBox>
          <RightTextBox
            className="signal"
            style={{ animationDelay: "1s" }}
            start={genAIAnswer !== "..."}
          >
            <Message>그거 맵지 않아?</Message>
          </RightTextBox>
          <LeftTextBox
            style={{ animationDelay: "2s" }}
            className="big signal"
            start={genAIAnswer !== "..."}
          >
            <img src="/assets/image/bot_profile.svg" width={39} height={36} />
            <Message>
              <div>한국인 n명 중에 n명이 맵다고 했어.</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <Graph color="red" percent={90} />
                <div>90%</div>
              </div>
            </Message>
          </LeftTextBox>
          <LeftTextBox
            className="signal"
            start={genAIAnswer !== "..."}
            style={{ animationDelay: "3s" }}
          >
            <img src="/assets/image/bot_profile.svg" width={39} height={36} />
            <Message>우리 떡볶이 먹으러갈래?</Message>
          </LeftTextBox>
          {/* 맵기 질문&답 */}
          <LeftTextBox
            className="signal"
            start={genAIAnswer !== "..."}
            style={{ animationDelay: "4s" }}
          >
            <img src="/assets/image/bot_profile.svg" width={39} height={36} />
            <Message>Do you like spicy food?</Message>
          </LeftTextBox>
          <AnswerBox
            className="signal"
            start={genAIAnswer !== "..."}
            style={{
              animationDelay: "10s",
              marginLeft: "auto",
              width: "fit-content",
            }}
          >
            <SpicyAnswer
              onClick={() => setUserSpicyAnswer("Yes")}
              answerIs={"Yes"}
            >
              Yes, I love spicy food!!!
            </SpicyAnswer>
            <SpicyAnswer
              onClick={() => setUserSpicyAnswer("SortOf")}
              answerIs={"SortOf"}
            >
              Yea, sort of?
            </SpicyAnswer>
            <SpicyAnswer
              onClick={() => setUserSpicyAnswer("no")}
              answerIs={"No"}
            >
              No, I don't. My stomach hurts.
            </SpicyAnswer>
          </AnswerBox>
        </Main>
      </Container>
      <img src="/assets/image/background_bottom.svg" width={"100%"} />
    </>
  );
};

export default Product;
