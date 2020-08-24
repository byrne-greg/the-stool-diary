import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import COLORS from '../../utils/colors'
import { PageCenter } from "../layout";
import { HeaderLink } from '.';

const useStyles = makeStyles({
  header: {
    background: COLORS.PURPLE,
    marginBottom: '1.45rem'
  },
  title: {
    margin: 0
  }
})

const Header = ({ siteTitle }) => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <PageCenter>
        <h1 className={classes.title}>
          <HeaderLink>{siteTitle}</HeaderLink>
        </h1>
      </PageCenter>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;

