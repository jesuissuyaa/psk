import React from "react"
import Logo from "../assets/logo.jpg"
import Header from "../assets/photo_2019-11.jpg"
import Menu from "../components/menu"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCamera } from "@fortawesome/free-solid-svg-icons"

export default ({ children }) => {
  return (
    <div
      style={{
        background: "#ffd600",
        // background: "rgb(255, 234, 1)",
        // background:
        //   "linear-gradient(0deg, rgba(255,234,1,1) 0%, rgba(255,191,135,1) 70%, rgba(255,135,148,1) 100%)",
        margin: "-8px",
        color: "#888",
        minHeight: "100vh",
        paddingTop: "1rem",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            margin: "0 auto",
            background: "white",
            padding: ".5rem 1rem",
            display: "flex",
            borderRadius: ".5rem",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              marginRight: "1rem",
            }}
          >
            <FontAwesomeIcon icon={faCamera} size="lg" />
          </div>
          <div>第64回くにたち市民文化祭</div>
        </div>
        <div
          style={{
            width: 0,
            height: 0,
            borderStyle: "solid",
            borderWidth: ".5rem .5rem 0 .5rem",
            borderColor: "white transparent transparent transparent",
            position: "relative",
            left: "-25vw",
          }}
        />
      </div>
      <img
        src={Header}
        alt="2019年11月のくにたち市民文化祭"
        style={{
          display: "block",
          margin: "0 auto",
          maxWidth: "100vw",
        }}
      />
      <div
        style={{
          backgroundColor: "white",
          borderRadius: ".5rem",
          minHeight: "40vh",
          marginRight: "2rem",
          marginLeft: "2rem",
          position: "relative",
          zIndex: 1000,
          display: "flex",
          alignContent: "center",
          flexDirection: "column",
          padding: "1rem",
          position: "absolute",
          top: "30vh",
        }}
      >
        {children}
      </div>
      <Menu />
    </div>
  )
}
