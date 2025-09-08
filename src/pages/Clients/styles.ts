 // src/pages/Clients/styles.ts
 import styled from "@emotion/styled";
 import { Link } from "react-router-dom";

 export const Page = styled.div`
   padding: 40px;
   display: flex;
   flex-direction: column;
   align-items: center;
  justify-content: center;
   min-height: 80vh;
   background-color: #f9f9f9;
 `;

 export const Title = styled.h1`
   font-size: 2.5rem;
   margin-bottom: 30px;
  color: #333;
 `;

export const List = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ClientLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  color: #0077cc;
  border: 2px solid #0077cc;
  padding: 12px 24px;
  border-radius: 10px;
  transition: all 0.3s ease;
  background-color: white;

  &:hover {
    background-color: #0077cc;
    color: white;
  }
`;
// import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 30px;
`;

export const ButtonControl = styled.div`
  width: 300px;
`;

