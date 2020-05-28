import React from "react"
import { Link } from "gatsby"
import { PageLayout } from "../components/layout"
import { Card, CardContent, CardContainer, CardTitle, CardMedia, CardActions } from "../components/card"
import { ImgGatsbyAstronaut } from "../components/images"

const IndexPage = () => (
  <PageLayout title="Page One">
    <div>
      <h1>Hi people</h1>
      <CardContainer>
        <Card noShadow>
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
        <Card noShadow>
          <CardMedia imgComp={<ImgGatsbyAstronaut />} />
          <CardTitle>Card 2</CardTitle>
          <CardContent>
            This is Card Two content with just media
          </CardContent>
        </Card>
        <Card noShadow>
          <CardMedia imgComp={<ImgGatsbyAstronaut />} />
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
        <Link to="/record-stool/">Go to Record Stool Screen</Link>
      </li>
      <li>
        <Link to="/">Go home</Link>
      </li>
    </ul>
  </PageLayout>

)

export default IndexPage
