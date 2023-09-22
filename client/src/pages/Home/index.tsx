import React from "react";
import { useNavigate } from "react-router-dom";
import { CircleArea, Circle1, Circle2, Circle3, ImageArea, KeywordCell, FooterText} from './style.js';


const Home = () => {
  const navigate=useNavigate();
  const goToProductList=()=>{
    navigate("/ProductList")
  }
  return (
  <div style={{ width: "100%" }}>
    <img style={{ width:"120%", marginLeft:"-5%",marginTop:"-5%",marginRight:"-5%",zIndex:1,}} src="/assets/image/main_yellow_circles.svg" />

    <div style={{ width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", marginBottom:"36px", paddingLeft: "20px", paddingRight: "20px", textAlign: "center", justifyContent: "center" }}>
      <img style={{ width: "64.8%", marginRight: "auto", marginLeft: "auto" }} src="/assets/logo/TPO_logo.svg" />
      <img style={{ width: "64.8%", marginRight: "auto", marginLeft: "auto" }} src="/assets/image/ottogi_main_character.svg" />
    </div>


    <div style={{ width: "100%", display: "flex", flexDirection: "row", flexWrap: "wrap", paddingLeft: "20px", paddingRight: "20px", textAlign: "center", justifyContent: "center" }}>
      <KeywordCell onClick={goToProductList}>🏠 comfort food</KeywordCell>
      <KeywordCell>🥨 snack</KeywordCell>
      <KeywordCell>🏫 after school</KeywordCell>
      <KeywordCell>🌃 late-night meal</KeywordCell>
      <KeywordCell>💊 sick</KeywordCell>
      <KeywordCell>🎂 birthday</KeywordCell>
      <KeywordCell>🥣 grab a bite</KeywordCell>
      <KeywordCell>🎎 Korean holiday</KeywordCell>
      <KeywordCell>🎉 housewarming</KeywordCell>
      <KeywordCell>🍺 hangover food</KeywordCell>
      <KeywordCell>🧓🏻 with elders</KeywordCell>
      <KeywordCell>🧒🏻 with children</KeywordCell>
      <KeywordCell>🍜 sick of rice</KeywordCell>
      <KeywordCell>🍺 going out to drink</KeywordCell>
      <KeywordCell>🌋 hot weather</KeywordCell>
      <KeywordCell>❄️ cold weather</KeywordCell>
    </div>

    <FooterText>TPO!ttogi</FooterText>
  </div>

  );
};

export default Home;