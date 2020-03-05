import React from "react"
import styled from "styled-components"
import img from "../images/bcg/homeBcg.jpeg"

const HomeHeader = ({ img, children }) => {
  return <IndexHeader img={img}>{children}</IndexHeader>
}

const IndexHeader = styled.header`
  min-height: calc(100vh - 54.53px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`
HomeHeader.defaultProps = {
  img: img,
}

export { HomeHeader }
