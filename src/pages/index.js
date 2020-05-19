import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/page-layout"
import { Card, CardContent, CardContainer, CardTitle, CardMedia, CardActions } from "../components/card"
import { ImgGatsbyAstronaut } from "../components/images"

const IndexPage = () => (
  <PageLayout title="Home">
    <div>
      <h1>Hi people</h1>
      <CardContainer>
        <Card>
          <CardTitle>Card 1</CardTitle>
          <CardContent>
            This is Card One content with just actions
          </CardContent>
          <CardActions>
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
          </CardActions>
        </Card>
        <Card>
          <CardMedia gatsbyImageComp={<ImgGatsbyAstronaut />} />
          <CardTitle>Card 2</CardTitle>
          <CardContent>
            This is Card Two content with just media
          </CardContent>
        </Card>
        <Card>
          <CardMedia gatsbyImageComp={<ImgGatsbyAstronaut />} />
          <CardTitle>Card 3</CardTitle>
          <CardContent>
            This is Card Three content that is much bigger than the other cards and has both actions and media.
          </CardContent>
          <CardActions>
            <button>Button 1</button>
          </CardActions>
        </Card>
      </CardContainer>
    </div>
    <ul>
      <li>
        <Link to="/page-1/">Go to page 1</Link>
      </li>
      <li>
        <Link to="/page-2/">Go to page 2</Link>
      </li>
    </ul>
  </PageLayout>

)

export default IndexPage
