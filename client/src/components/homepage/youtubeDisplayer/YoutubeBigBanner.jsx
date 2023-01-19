import { useEffect, useState } from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 50px;
  border-radius: 5px;
  border: 1px solid white;
  background-color: #625151;
`;
const LinkImageFelxBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const LinkImageContainer = styled.div`
  width: 32%;
  padding: 20px;
`;
const YoutubeLinkImage = styled.img`
  width: 100%;
`;

export default function YoutubeBigBanner() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/videos")
      .then((results) => results.json())
      .then((data) => {
        setData(data.data);
      });
  }, []);
  console.log(data);
  return (
    <>
      <OuterContainer>
        <LinkImageFelxBox>
          {data.map((linkObject) => (
            <LinkImageContainer>
              <a href={linkObject.videoLink}>
                <YoutubeLinkImage src={linkObject.coverImgLink} alt="" />
              </a>
            </LinkImageContainer>
          ))}
        </LinkImageFelxBox>
      </OuterContainer>
    </>
  );
}
