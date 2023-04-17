import { Route, Routes } from 'react-router-dom';

import { Cliente } from '../pages/Cliente';
import { FormsServicos } from '../pages/FormsServicos';
import { Home } from '../pages/Home';
import { RelatorioServicos } from '../pages/RelatorioServicos';
import { ServicosFinalizados } from '../pages/ServicosFinalizados';

export function Router() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/cliente' element={ <Cliente /> } />
      <Route path='/formulario' element={ <FormsServicos /> } />
      <Route path='/relatorio' element={ <RelatorioServicos /> } />
      <Route path='/finalizados' element={ <ServicosFinalizados /> } />
    </Routes>
  )
}
