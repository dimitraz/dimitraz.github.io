import React, { useEffect, useRef } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import icons from "../components/icons"
import Folder from "../components/folder"
import butter from "../../content/assets/butter.png"
import lol from "../../content/assets/hello2.png"

import text from "../../content/assets/text.png"
import styled, { css } from "styled-components"

import {
  Engine,
  Render,
  Events,
  Bodies,
  World,
  Mouse,
  MouseConstraint,
} from "matter-js"

const Scene = () => {
  const sceneRef = useRef(null)

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  useEffect(() => {
    const cw = window.innerWidth
    const ch = window.innerHeight - 36

    const engine = Engine.create()
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: cw,
        height: ch,
        wireframes: false,
        background: "transparent",
      },
    })

    const message = Bodies.rectangle(900, 50, 250, 50, {
      restitution: 0.7,
      render: {
        sprite: {
          texture: require(`../../content/assets/butter.png`),
          xScale: 0.2,
          yScale: 0.2,
        },
      },
    })
    World.add(engine.world, [message])

    icons.map((icon, index) => {
      let scale = icon.scale || 1
      let item = Bodies.rectangle(
        900,
        50,
        icon.width * scale,
        icon.height * scale,
        {
          restitution: 0.7,
          render: {
            sprite: {
              texture: require(`../../content/assets/components/${icon.name}.png`),
              xScale: scale,
              yScale: scale,
            },
          },
        }
      )
      return World.add(engine.world, [item])
    })

    // add scene walls
    World.add(engine.world, [
      Bodies.rectangle(cw / 2, -10, cw, 20, { isStatic: true }),
      Bodies.rectangle(-10, ch / 2, 20, ch, { isStatic: true }),
      Bodies.rectangle(cw / 2, ch + 10, cw, 20, { isStatic: true }),
      Bodies.rectangle(cw + 10, ch / 2, 20, ch, { isStatic: true }),
    ])

    // add mouse control
    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.5,
          render: {
            visible: false,
          },
        },
      })

    World.add(engine.world, mouseConstraint)

    // add more elements on click
    Events.on(mouseConstraint, "mousedown", function (event) {
      let img = icons[random(0, icons.length - 1)]
      let scale = img.scale || 1

      const icon = Bodies.rectangle(
        cw / 2,
        50,
        img.width * scale,
        img.height * scale,
        {
          restitution: 0.7,
          render: {
            sprite: {
              texture: require(`../../content/assets/components/${img.name}.png`),
              xScale: scale,
              yScale: scale,
            },
          },
        }
      )

      World.add(engine.world, [icon])
    })

    Engine.run(engine)
    Render.run(render)
  }, [])

  return (
    <div>
      <div ref={sceneRef} style={{ width: "100%", height: "100%" }} />
    </div>
  )
}

const Wrapper = styled.section`
  padding: 8em 6em;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  max-width: 2500px;
  text-align: center;

  mobile {
    flex-wrap: wrap;
    flex-direction: column;
  }
`

const Nav = styled.div`
  display: flex;
  flex-direction: column;
`
const Icon = styled.div`
  margin: ${props => props.margin};
  right: 0;
  margin-right: 0;
`

const NavItem = props => {
  const isActive = props.location.pathname === props.path
  return (
    <Icon margin={props.margin}>
      <Folder
        text={props.text}
        iconType={props.iconType}
        isActive={isActive}
        path={props.path}
      />
    </Icon>
  )
}

// const Header = styled.header`
//   display: grid;
//   position: fixed;
//   padding: 8em 0 8em 6em;
// `

const Container = styled.section`
  text-align: center;
`

const Home = ({ location }) => {
  return (
    <Layout location={location}>
      <SEO title="All posts" />

      {/* <Scene /> */}

      {/* <br />
      <img src={butter} height="300" />
      <img src={lol} height="300" /> */}

      <Wrapper>
        <Container>
          <Nav>
            <NavItem
              margin="0 0 10% 0"
              iconType="folder2"
              text="Home"
              location={location}
              path={"/"}
            />
            <NavItem
              margin="0 0 10% 35%"
              text="Blog"
              iconType="folder2"
              location={location}
              path={"/posts"}
            />
            <NavItem
              margin="0 0 0 70%"
              text="Photos"
              iconType="folder2"
              location={location}
              path={"/photos"}
            />
          </Nav>
        </Container>
        <Container>
          {" "}
          {/* <img src={text} width="600" /> <br /> */}
          {/* <img src={text} width="400" /> <br />
          <img src={text} width="200" />
          <br /> */}
          {/* <img src={cat} height="300" /> */}
        </Container>
        <Container>
          <Nav>
            <NavItem
              margin="0 0 10% 70%"
              text="Github"
              iconType="cd"
              location={location}
              path={"/photos"}
            />
            <NavItem
              margin="0 0 10% 35%"
              text="Linkedin"
              iconType="world"
              location={location}
              path={"/photos"}
            />
            <NavItem
              margin="0"
              text="Other"
              iconType="page"
              location={location}
              path={"/photos"}
            />
          </Nav>
        </Container>
      </Wrapper>

      {/* <Folder text="hello" iconType="cat2" /> */}

      {/* <Scene /> */}
    </Layout>
  )
}

export default Home
