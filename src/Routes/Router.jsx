import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import WizardsOfHouse from '../pages/WizardsOfHouse/WizardsOfHouse'
import DetailsWizard from '../pages/DetailsWizard/DetailsWizard'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

export default function Router(){
    return(
        <BrowserRouter>
         <Routes>
             <Route path='/API-Harry-Potter' element={<HomePage />}/>
             <Route path='/API-Harry-Potter/Wizards/:house' element={<WizardsOfHouse />} />
             <Route path='/API-Harry-Potter/Wizards/Detail/:name/:house' element={<DetailsWizard />} />
             <Route path='*' element={<ErrorPage />} />
         </Routes>
        </BrowserRouter>
    )
}