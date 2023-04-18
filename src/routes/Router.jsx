import { Route, Routes } from 'react-router-dom';

import { Client } from '../pages/Client';
import { FormsService } from '../pages/FormsService';
import { Home } from '../pages/Home';
import { ServiceReport } from '../pages/ServiceReport';
import { FinishedReport } from '../pages/FinishedReport';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/cliente' element={ <Client /> } />
      <Route path='/formulario' element={ <FormsService /> } />
      <Route path='/relatorio' element={ <ServiceReport /> } />
      <Route path='/finalizados' element={ <FinishedReport /> } />
    </Routes>
  )
}
