import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from "react-i18next"
import {
  useMediaQuery,
  useTheme,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  makeStyles,
} from "@material-ui/core"
import { FilledButton, TextButton } from "../../button-mui"

const useStyles = makeStyles(theme => ({
  dialogActions: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  },

  actionButton: {
    [theme.breakpoints.down("xs")]: {
      padding: "1rem 0",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "1rem 1rem",
    },
  },
}))

const DeleteAccountConfirmationDialog = ({
  isOpen = false,
  setOpen = () => {},
  handleDeleteConfirm = () => {},
  handleDeleteCancel = () => {},
}) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const isFullScreen = useMediaQuery(theme.breakpoints.down("xs"))
  const classes = useStyles(theme)

  return (
    <Dialog
      open={isOpen}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullScreen={isFullScreen}
    >
      <DialogTitle id="alert-dialog-title">
        {t("Delete your stool diary account?")}
      </DialogTitle>
      <DialogContent>
        <div id="alert-dialog-description">
          <Typography>
            {t("Are you sure you want to delete your account?")}
          </Typography>
          <Typography>{t("This process cannot be reversed.")}</Typography>
        </div>
      </DialogContent>
      <DialogActions className={classes.dialogActions}>
        <TextButton
          className={classes.actionButton}
          onClick={() => {
            handleDeleteCancel()
            setOpen(false)
          }}
        >
          {t("Cancel")}
        </TextButton>
        <FilledButton
          className={classes.actionButton}
          color={theme.palette.error}
          block={isFullScreen}
          onClick={async () => {
            setOpen(false)
            await handleDeleteConfirm()
          }}
        >
          {t("Delete account")}
        </FilledButton>
      </DialogActions>
    </Dialog>
  )
}
export default DeleteAccountConfirmationDialog

DeleteAccountConfirmationDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  handleDeleteCancel: PropTypes.func.isRequired,
  handleDeleteConfirm: PropTypes.func,
}
