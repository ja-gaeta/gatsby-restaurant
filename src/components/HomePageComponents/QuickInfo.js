import React from "react"
import { Section, Title, SectionButton } from "../../utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../utils"

const QuickInfo = () => {
  return (
    <Section>
      <Title message="let us tell you" title="our mission" />
      <QuickInfroWrapper>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          sit consequatur maxime architecto at, voluptas quisquam porro quo
          expedita, fuga iure repudiandae doloribus id distinctio. Eaque
          voluptates quibusdam autem quod dolor molestias ea eligendi tempore
          consectetur deleniti? Quam nemo doloribus voluptatibus quas dolor
          velit dignissimos distinctio, veniam ut dicta dolorem.
        </p>
        <Link to="/about/" style={{ textDecoration: "none" }}>
          <SectionButton style={{ margin: "2rem auto" }}>about</SectionButton>
        </Link>
      </QuickInfroWrapper>
    </Section>
  )
}

const QuickInfroWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`

export default QuickInfo
