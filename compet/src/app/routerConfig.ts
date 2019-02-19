import { Routes } from '@angular/router';

import { InscriptionComponent } from './inscription/inscription.component';
import { ProfilUtiComponent } from './profil-uti/profil-uti.component';
import { ProfilAdminComponent } from './profil-admin/profil-admin.component';

export const appRoutes: Routes = [
    {
        path: 'inscription',
        component: InscriptionComponent
    },
    {
        path: 'profilUti/:id',
        component: ProfilUtiComponent
    },
    {
        path: 'profilAdmin',
        component: ProfilAdminComponent
    }
];