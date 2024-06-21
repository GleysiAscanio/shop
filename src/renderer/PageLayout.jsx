export { PageLayout }

import './PageLayout.css'
import { PageContextProvider } from './usePageContext'
import { childrenPropType } from './PropTypeValues'
import PropTypes from 'prop-types'

PageLayout.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
}

function PageLayout({ pageContext, children }) {
  return (
    <PageContextProvider pageContext={pageContext}>
        {/* <Navigation>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </Navigation> */}
      <Content>{children}</Content>
    </PageContextProvider>
  )
}

// function Navigation({ children }) {
//   return (
//     <div
//       style={{
//         paddingBottom: 25,
//         paddingTop: 5,
//         fontSize: '1.2em',
//         display: 'flex',
//         justifyContent: 'center',
//         gap: 25,
//       }}
//     >
//       {children}
//     </div>
//   )
// }

function Content({ children }) {
  return <div>{children}</div>
}