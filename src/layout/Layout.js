import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container } from './LayoutStyles'
import { motion } from 'framer-motion';

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <motion.div initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
        pageExit:{
          opacity: 0
        },
      }}>
        <main>{children}</main>
      </motion.div>
      <Footer />
    </Container>
  )
}
