import { Routes } from "@angular/router";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserEditComponent } from "./user-edit/user-edit.component";
import { UserNewComponent } from "./user-new/user-new.component";


export const USER_ROUTES: Routes = [
    { path: 'new', component: UserNewComponent },
    { path: 'edit', component: UserEditComponent },
    { path: 'detail', component: UserDetailComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'detail' }
]