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
const Data = [
  {
    firstLink: "https://youtu.be/33CIB41GQew",
    secondLink:
      "https://i9.ytimg.com/vi/33CIB41GQew/mqdefault.jpg?v=6249c39d&sqp=CIj_o54G&rs=AOn4CLAtHRPJ4N10bfz7PQbRMLstgUBWQA",
  },
  {
    firstLink: "https://youtu.be/33CIB41GQew",
    secondLink:
      "https://i9.ytimg.com/vi/33CIB41GQew/mqdefault.jpg?v=6249c39d&sqp=CIj_o54G&rs=AOn4CLAtHRPJ4N10bfz7PQbRMLstgUBWQA",
  },
  {
    firstLink: "https://youtu.be/33CIB41GQew",
    secondLink:
      "https://i9.ytimg.com/vi/33CIB41GQew/mqdefault.jpg?v=6249c39d&sqp=CIj_o54G&rs=AOn4CLAtHRPJ4N10bfz7PQbRMLstgUBWQA",
  },
];
export default function YoutubeBigBanner() {
  return (
    <>
      <OuterContainer>
        <LinkImageFelxBox>
          {Data.map((linkObject) => (
            <LinkImageContainer>
              <a href={linkObject.firstLink}>
                <YoutubeLinkImage src={linkObject.secondLink} alt="" />
              </a>
            </LinkImageContainer>
          ))}
        </LinkImageFelxBox>
      </OuterContainer>
    </>
  );
}
