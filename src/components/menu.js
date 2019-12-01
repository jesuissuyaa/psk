import React from "react"
import { Link } from "gatsby"
// change color depending on props

const Item = props => {
  return (
    <Link
      to={props.to}
      style={{
        textDecoration: `none`,
        color: `#888`,
        borderTopColor: `#ff8c84`,
        borderTopStyle: `solid`,
        borderTopWidth: `0`,
        display: `flex`,
        alignItems: `center`,
      }}
      activeStyle={{
        color: `#ff8c84`,
        borderTopWidth: `.5rem`,
      }}
      partiallyActive={props.to === `/` ? false : true}
    >
      <div style={{ display: `flex`, alignItems: `center` }}>
        {props.children}
      </div>
    </Link>
  )
}
export default () => {
  return (
    <div
      style={{
        position: `fixed`,
        bottom: 0,
        left: 0,
        width: `100vw`,
        display: `flex`,
        justifyContent: `space-between`,
        padding: `1rem`,
        background: `white`,
        boxSizing: `border-box`,
        marginTop: `3rem`,
      }}
    >
      <Item to="/" isPage>
        TOP
      </Item>
      <Item to="/contact/">連絡先</Item>
      <Item to="/practice/">練習日程</Item>
      <Item to="/performance/">発表</Item>
      <Item to="/blog/">Blog</Item>
    </div>
  )
}
