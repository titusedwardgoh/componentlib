import DotDivider from "./components/DotDivider"
import BadgeSection from "./Sections/BadgeSection.jsx"
import BannerSection from "./Sections/BannerSection.jsx"
import CardSection from "./Sections/CardSection.jsx"
import TipSection from "./Sections/TipSection.jsx"
import ToastSection from "./Sections/ToastSection.jsx"
import Toggle from "./components/Toggle/index.jsx"
import ToggleButton from "./components/Toggle/ToggleButton.jsx"
import ToastSection2 from "./Sections/ToastSection2.jsx"

export default function App() {
 

  return (
    <>
    <h1>React Component Library</h1>
    <h2>Badge Componenet</h2>
    <h3>Default Badge</h3>
    <div className = "badge-wrapper">
      <BadgeSection/>
    </div>
    <DotDivider/>
    <h2>Banner Componenet</h2>
    <BannerSection/>
    <DotDivider/>
    <h2>Card Componenet</h2>
    <div className = "card-wrapper">
      <CardSection/>
    </div>
    <DotDivider/>
    <h2>Tool Tip Component</h2>
    <TipSection/>
    <DotDivider/>
    <h2>Toast Component</h2>
    <div className = "toast-wrapper">
      <ToastSection/>
    </div>
      <DotDivider/>
      <h2>Toast Component</h2>
     <div className = "toast-wrapper">
      <ToastSection2/>
    </div>
    </>
    
  )
}


