import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { useStateValue } from "../../State/StateProvider";
const LinkButton = props => {
  const [{ page }, pageDispatch] = useStateValue();
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    title,
    newPage
  } = props;
  return (
    <button
      onClick={() => {
          console.log('link button called')
        pageDispatch({
          type: "changePage",
          newPage: props.newPage
        });
        history.push(to);
      }}
    >
      {props.title}
    </button>
  );
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
};

export default withRouter(LinkButton);
