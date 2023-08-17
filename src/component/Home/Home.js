import React,{useEffect} from 'react'
import Banner from './Banner/Banner'
import ServicesInfo from './Services-info/ServicesInfo'
import Experience from './Experience/Experience'
import Process from './Process/Process'
import Quotations from './quotations/Quotations'
import Plans from './Plans/Plans'
import AwesomeTeam from './Awesome-team/AwesomeTeam'
import Statistics from './Statistics/Statistics'
import ClientsOpinion from './Clients-opinion/ClientsOpinion'
import Gallerys from './Gallerys/Gallerys'
import Guide from './Guide/Guide'

const Home = () => {

   useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

  return (
    <div>
        <Banner/>
        <ServicesInfo/>
        <Experience/>
        <Process/>
        <Quotations/>
        <Plans/>
        <AwesomeTeam/>
        <Statistics/>
        <ClientsOpinion/>
        <Gallerys/>
        <Guide/>
    </div>
  )
}

export default Home