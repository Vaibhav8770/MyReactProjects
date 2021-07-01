import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import BodyHome from './BodyHome';
import BrandPage from './DataComponents/Perfume/BrandPage';
import Hhh from './DataComponents/Perfume/Hhh';
import Navbar from './topComponents/Navbar';
import Secondappbar from './topComponents/Secondappbar';


// const bgColor1 = '#001219';
const bgColor1 = '#001219';
// const bgColor2 = '#2D2926FF';
const bgColor2 = '#2D2926FF';
const iconColor = '#E94B3CFF';
// const textColor ='#2DA8D8FF';
const textColor = '#eeba0b';
const dividerGradientColor = 'linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet)';



const Home = () => {
    return (
        <>
            <Router>
                <Navbar />
                <Secondappbar />
                <Switch>
                    <Route path="/perfume/:id"><Hhh /></Route>
                </Switch>
                {/* <BodyHome /> 
            <BrandPage/>*/}
            </Router>
        </>
    )
}

export default Home
export { bgColor1, bgColor2, iconColor, textColor, dividerGradientColor }
