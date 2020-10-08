import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import CardContent from "@material-ui/core/CardContent"
import { Chip } from "../../chip"
import { Card, CardActions, CardContainer } from "../../card-mui"
import { StoolTypeCard, ItemNotFoundCard } from "../../card-mui/composite"
import stoolClassifications from "../../../utils/stool-classifications"
import { FilledButton } from "../../button-mui"
import { DateTimePicker, DatePicker } from "../../datetime-picker"
import { convertToProperCase } from "../../../utils/text"

const useStyles = makeStyles({
  captureSummarySection: {
    padding: "1rem 0 2rem 0",
  },
  centerCardContent: {
    textAlign: "center",
  },
  sizeChip: {
    padding: "2rem",
    fontWeight: "bold",
  },
})

const StoolCaptureSummary = ({
  selectedType = null,
  selectedDateTime = null,
  selectedSize = null,
  handleTypeReselect = () => {},
  handleDateTimeReselect = () => {},
  handleSizeReselect = () => {},
  formNavButtons = null,
  setHasReachedSummary = () => {},
}) => {
  useEffect(() => {
    setHasReachedSummary()
  }, [])

  const theme = useTheme()
  const classes = useStyles()
  const { t } = useTranslation()
  const commonCardWidth = "25rem"
  const stoolClassificationOnSelectedType = stoolClassifications.find(
    stoolClass => stoolClass.type === selectedType
  )

  return (
    <div>
      <Typography
        gutterBottom
        variant="h3"
        component="h2"
        data-testid="stool-form-summary-capture-screen-title"
      >
        {t("Summary")}
      </Typography>
      <section className={classes.captureSummarySection}>
        <Typography gutterBottom variant="h4" component="h3">
          {t("Chosen stool type")}
        </Typography>
        <CardContainer cardWidth={commonCardWidth}>
          {stoolClassificationOnSelectedType ? (
            <StoolTypeCard
              data-testid={`selected-stool-type-card-type-${stoolClassificationOnSelectedType.type}`}
              type={stoolClassificationOnSelectedType.type}
              image={stoolClassificationOnSelectedType.image}
              description={stoolClassificationOnSelectedType.description}
              handleClick={handleTypeReselect}
              isSelected
              deselectButton={
                <FilledButton
                  color={theme.palette.secondary}
                  block
                  onClick={handleTypeReselect}
                >
                  {t(`Click to reselect`)}
                </FilledButton>
              }
            />
          ) : (
            <ItemNotFoundCard />
          )}
        </CardContainer>
      </section>

      <section className={classes.captureSummarySection}>
        <Typography gutterBottom variant="h4" component="h3">
          {t("Chosen stool size")}
        </Typography>
        <CardContainer cardWidth={commonCardWidth}>
          {selectedSize ? (
            <Card data-testid={`selected-stool-size-card-${selectedSize}`}>
              <CardContent className={classes.centerCardContent}>
                <Chip
                  color={theme.palette.info}
                  className={classes.sizeChip}
                  label={
                    <Typography variant="h4" component="p">
                      {convertToProperCase(selectedSize)}
                    </Typography>
                  }
                />
              </CardContent>
              <CardActions>
                <FilledButton
                  color={theme.palette.secondary}
                  block
                  onClick={handleSizeReselect}
                >
                  {t(`Click to reselect`)}
                </FilledButton>
              </CardActions>
            </Card>
          ) : (
            <ItemNotFoundCard />
          )}
        </CardContainer>
      </section>

      <section className={classes.captureSummarySection}>
        <Typography gutterBottom variant="h4" component="h3">
          {t("Chosen stool date/time")}
        </Typography>
        <CardContainer cardWidth={commonCardWidth}>
          {selectedDateTime ? (
            <Card data-testid={"selected-stool-date-time-card"}>
              <CardContent className={classes.centerCardContent}>
                {selectedDateTime.dateOnly ? (
                  <DatePicker
                    label="Selected Stool Date"
                    value={selectedDateTime.timestamp}
                    readOnly
                  />
                ) : (
                  <DateTimePicker
                    label="Selected Stool Date/Time"
                    value={selectedDateTime.timestamp}
                    readOnly
                  />
                )}
              </CardContent>
              <CardActions>
                <FilledButton
                  color={theme.palette.secondary}
                  block
                  onClick={handleDateTimeReselect}
                >
                  {t(`Click to reselect`)}
                </FilledButton>
              </CardActions>
            </Card>
          ) : (
            <ItemNotFoundCard />
          )}
        </CardContainer>
      </section>
      {formNavButtons}
    </div>
  )
}

export default StoolCaptureSummary
