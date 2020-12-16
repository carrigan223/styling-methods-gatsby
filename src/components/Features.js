// src/components/Features.js
import React from "react"
import {
  FeatureHeader,
  FeatureInner,
  FeatureSection,
} from "../styles/emotion/FeatureStyles"
import Container from "./Container"
export default function Features() {
  return (
    <FeatureSection>
      <Container>
        <FeatureInner>
          <FeatureHeader>
            <div>
              <h1 className="title">Features</h1>
              <p className="subtitle">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                illum dolore nostrum recusandae ipsam corporis mollitia delectus
                quibusdam quod! Quasi.
              </p>
            </div>
          </FeatureHeader>
        </FeatureInner>
      </Container>
    </FeatureSection>
  )
}
