import styled from "styled-components";
import pic from "../../imgs/ImageTony.jpg";

const OuterContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
  border-radius: 5px;
`;

const ImgTxtFlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TonyImg = styled.img`
  width: 170px;
  height: 170px;
`;

const BannerText = styled.div`
  font-size: 90px;
  font-weight: bold;
  text-align: left;
  text-shadow: 0 0 3px #ff0000, 0 0 5px #0000ff;
  color: #f7f4f4;
  padding-left: 30px;
`;

export default function TopBanner() {
  return (
    <>
      <OuterContainer>
        <ImgTxtFlexContainer>
          <TonyImg src={pic} />
          <BannerText>
            Tony <br></br> Pooyappallil
          </BannerText>
        </ImgTxtFlexContainer>
      </OuterContainer>
    </>
  );
}
