import React,{useEffect} from 'react'
import AboutBanner from './AboutBanner/AboutBanner'
import AboutRestore from './AboutRestore/AboutRestore'
import AwesomeTeam from '../Home/Awesome-team/AwesomeTeam'

const AboutUs = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <AboutBanner/>
      <AboutRestore/>
      <AwesomeTeam/>
    </>
  )
}

export default AboutUs