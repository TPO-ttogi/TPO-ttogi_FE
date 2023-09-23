import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircleArea, Circle1, Circle2, Circle3, ImageArea, KeywordCell, FooterText} from './style.js';
const Home = () => {
  const [selectedKeyword, setSelectedKeyword]=useState();
  const navigate=useNavigate();
  const goToProductList=(keywordId)=>{
    navigate("/ProductList",{
      state:keywordId,
    })
  }
  useEffect(()=>{
    if (selectedKeyword>0){
      goToProductList(selectedKeyword)
    }
  }, [selectedKeyword])
  return (
  <div style={{ width: "100%" , paddingTop:"80px"}}>
    {/* <img style={{ width:"120%", marginLeft:"-5%",marginTop:"-5%",marginRight:"-5%",zIndex:1,}} src="/assets/image/main_yellow_circles.svg" /> */}
    <Circle1></Circle1>
    <Circle2></Circle2>
    <Circle3></Circle3>
    <div style={{ width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", marginBottom:"36px", paddingLeft: "20px", paddingRight: "20px", textAlign: "center", justifyContent: "center" , zIndex:100}}>
      <img style={{ width: "64.8%", marginRight: "auto", marginLeft: "auto" }} src="/assets/logo/TPO_logo.svg" />
      <img style={{ width: "64.8%", marginRight: "auto", marginLeft: "auto" }} src="/assets/image/ottogi_main_character.svg" />
    </div>
    <div style={{ width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", paddingLeft: "20px", paddingRight: "20px", textAlign: "center", justifyContent: "center" , zIndex:100}}>
      <KeywordCell onClick={()=>setSelectedKeyword(1)}>:집: comfort food</KeywordCell>
      <KeywordCell  onClick={()=>setSelectedKeyword(2)}>:프레첼: snack</KeywordCell>
      <KeywordCell  onClick={()=>setSelectedKeyword(3)}>:학교: after school</KeywordCell>
      <KeywordCell onClick={()=>setSelectedKeyword(4)}>:별이_있는_밤: late-night meal</KeywordCell>
      <KeywordCell onClick={()=>setSelectedKeyword(5)}>:약: sick</KeywordCell>
      <KeywordCell onClick={()=>setSelectedKeyword(6)}>:생일: birthday</KeywordCell>
      <KeywordCell onClick={()=>setSelectedKeyword(7)}>:숟가락이_담긴_그릇: grab a bite</KeywordCell>
      <KeywordCell onClick={()=>setSelectedKeyword(8)}>:인형: Korean holiday</KeywordCell>
      <KeywordCell onClick={()=>setSelectedKeyword(9)}>:짠: housewarming</KeywordCell>
      <KeywordCell onClick={()=>setSelectedKeyword(10)}>:맥주: hangover food</KeywordCell>
      <KeywordCell onClick={()=>setSelectedKeyword(11)}>:노인::피부톤-2: with elders</KeywordCell>
      <KeywordCell onClick={()=>setSelectedKeyword(12)}>:아이::피부톤-2: with children</KeywordCell>
      <KeywordCell onClick={()=>setSelectedKeyword(13)}>:라면: sick of rice</KeywordCell>
      <KeywordCell onClick={()=>setSelectedKeyword(14)}>:맥주: going out to drink</KeywordCell>
      <KeywordCell onClick={()=>setSelectedKeyword(15)}>:화산: hot weather</KeywordCell>
      <KeywordCell onClick={()=>setSelectedKeyword(16)}>:눈송이: cold weather</KeywordCell>
    </div>
    <FooterText>TPO!ttogi</FooterText>
  </div>
  );
};
export default Home;