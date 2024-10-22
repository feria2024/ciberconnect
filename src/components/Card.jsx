import React from "react";
import styled from "styled-components";

const Card = ({ title, description }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="card-info">
        <h2>{title}</h2>
        <p>{description}</p>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
 --background: linear-gradient(to left, #e8ddcb 0%, #0c7e7e 100%);
 width: 100%;
 height: auto;
 max-width:1336px;
 padding: 5px;
 border-radius: 1rem;
 overflow: visible;
 background: #f7ba2b;
 background: var(--background);
 position: relative;
 z-index: 1;
 display:flex;
 flex-direction:column;
 align-content:center;
 justify-content:center;
}



.card-info {
 --color: #181818;
 background: var(--color);
 color: var(--color);
 display: flex;
 flex-direction:column;
 justify-content: center;
 align-items: center;
 height: auto;
 width:auto;
 overflow: visible;
 border-radius: .7rem;
 padding:10px;
 padding-right:20px;
 padding-left:17px;
 flex-wrap:wrap;
}

.card .title {
 font-weight: bold;
 letter-spacing: .1em;
}

/*Hover*/
.card:hover::after {
 opacity: 0;
}

.card .card-info p {
 color: #e8ddcb;
 transition: color 1s;
 font-size:20px
}
.card .card-info h2 {
 color: #cdb380;
 transition: color 1s;
 font-size:30px;
}
`

export default Card;
