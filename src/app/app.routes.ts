import { Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';

// Mis imports
import { AuthGuard } from '@auth0/auth0-angular';
import { ClientCreateComponent } from './components/client-create/client-create.component';
import { ClientEditComponent } from './components/client-edit/client-edit.component';

export const routes: Routes = [
    // Ruta para listar clientes (página principal)
    { path: '', component: ClientsComponent, canActivate: [AuthGuard] },
    
    // Ruta para listar clientes
    { path: 'clients', component: ClientsComponent, canActivate: [AuthGuard] },
    
    // Ruta para crear un cliente
    { path: 'clients/create', component: ClientCreateComponent, canActivate: [AuthGuard] },
    
    // Ruta para editar un cliente
    { path: 'clients/:id/edit', component: ClientEditComponent, canActivate: [AuthGuard] },
    
    // Cualquier ruta no definida redirige a la lista de clientes
    { path: '**', redirectTo: '/clients'}
];