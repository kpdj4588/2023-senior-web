import React from "react";
import styled from 'styled-components';
import { withRouter, Link } from 'react-router-dom';

const Container1 = styled.div`
  display: flex;
  align-items: center;
  width: 1060px;
  height: 230px;
  background: #E4E4E4;
  overflow-x: auto;
  overflow-y: hidden;
`;

const ImageBox = styled.div`
  margin: 10px;
`;

const Image = styled.img`
  width: 190px;
  height: 190px;
`;

function Contents3 (props) {
    const { topic } = props;

    const images = {
        경제: ["/images/aa.png", "/images/af.png", "/images/ag.jpg", "/images/ah.jpg", "/images/g.png"],
        일자리: ["/images/ae.png", "/images/ay.png", "/images/ay.png"],
        청년: ["/images/au.png" ],
        고등학교: ["/images/n.jpg", "/images/o.png"],
        대학교: ["/images/ar.png", "/images/az.png", "/images/b.png", "/images/c.png", "/images/i.png"],
        음악: ["/images/l.png", "/images/m.jpg"],
        패션: ["/images/as.png", "/images/av.png", "/images/e.png"],
        국내여행: ["/images/ad.png", "/images/ai.jpg", "/images/an.png", "/images/ak.jpg","/images/aj.png", "/images/j.png" ],
        해외여행: ["/images/p.png", "/images/q.jpg", "/images/s.jpg"],
        코스메틱: ["/images/am.png", "/images/t.jpg"],
        요리: ["/images/ax.png", "/images/aw.png"],
        베이킹: ["/images/u.jpg", "/images/v.jpg"],
        스포츠: ["/images/a.png", "/images/al.png", "/images/at.png", "/images/af.png", "/images/h.png"],
        영화: ["/images/ao.png", "/images/aq.png"],
        고양이: ["/images/d.png", "/images/k.jpg"],
        강아지: ["/images/ac.png", "/images/ab.png"],
    };

    return (
       <div>
        <Container1>
        {images[topic] &&
          images[topic].map((src, index) => (
            <ImageBox key={index}>
              <Link to={`/ContentPage${src}`}>
                <Image src={src} alt={topic} />
              </Link>
            </ImageBox>
          ))}
        </Container1>
       </div>
    );
}

export default withRouter(Contents3);
