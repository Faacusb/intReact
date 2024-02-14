import PropTypes from 'prop-types';
import { LayoutWrapper } from "../assets/css/LayoutStyles"

function Layout({children}) {
  return (
    <LayoutWrapper>
        {children}
    </LayoutWrapper>
  )
}
Layout.propTypes = {
    children: PropTypes.node.isRequired
  };

export default Layout