import React from "react"
import { Typography, makeStyles } from "@material-ui/core"
import COLORS from "../../utils/colors"

const useStyles = makeStyles({
  attributions: {
    fontSize: 12,
  },
  linkDecoration: {
    color: COLORS.WHITE,
  },
})

const LegoImageAttribution = () => {
  const classes = useStyles()
  return (
    <div>
      Hero image by{" "}
      <a
        href="https://unsplash.com/@danielkcheung?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        className={classes.linkDecoration}
      >
        Daniel Cheung
      </a>{" "}
      on{" "}
      <a
        href="https://unsplash.com/s/photos/toilet?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        className={classes.linkDecoration}
      >
        Unsplash
      </a>
    </div>
  )
}

const DiaryIconAttribution = () => {
  const classes = useStyles()
  return (
    <div>
      Diary icon made by{" "}
      <a
        href="https://www.flaticon.com/free-icon/diary_1358966?term=diary&page=4&position=21"
        title="Adib Sulthon"
        className={classes.linkDecoration}
      >
        Adib Sulthon
      </a>{" "}
      from{" "}
      <a
        href="https://www.flaticon.com/"
        title="Flaticon"
        className={classes.linkDecoration}
      >
        www.flaticon.com
      </a>
    </div>
  )
}

const StoolImagesAttribution = () => {
  const classes = useStyles()
  return (
    <div>
      Stool images sourced from freely licensed media file created by{" "}
      <a
        href="https://web.archive.org/web/20110205170819/http://en.wikipedia.org/wiki/File:Bristol_Stool_Chart.png"
        title="Stool Images from Wikimedia Commons"
        className={classes.linkDecoration}
      >
        Kyle Thompson from Wikimedia Commons
      </a>
    </div>
  )
}

const Attributions = () => {
  const classes = useStyles()
  return (
    <div>
      <Typography className={classes.attributions}>
        <DiaryIconAttribution />
        <StoolImagesAttribution />
        <LegoImageAttribution />
      </Typography>
    </div>
  )
}
export default Attributions
