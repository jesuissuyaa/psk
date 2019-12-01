import React from "react"
import { Link } from "gatsby"
import styles from "./menu.module.scss"
// change color depending on props

const Item = props => {
  return (
    <Link
      to={props.to}
      className={styles.item}
      activeClassName={styles.activeItem}
      partiallyActive={props.to === `/` ? false : true}
    >
      {props.children}
    </Link>
  )
}
export default () => {
  return (
    <div className={styles.menu}>
      <Item to="/" isPage>
        TOP
      </Item>
      <Item to="/contact/">連絡先</Item>
      <Item to="/practice/">練習日程</Item>
      <Item to="/performance/">発表</Item>
      <Item to="/blog/">ブログ</Item>
    </div>
  )
}
