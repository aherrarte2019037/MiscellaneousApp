import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ClassComponent } from './components/class/class.component';
import { HighlightDirective } from './directives/highlight.directive';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTES } from './app.routes';
import { UserComponent } from './components/user/user.component';
import { UserNewComponent } from './components/user/user-new/user-new.component';
import { UserEditComponent } from './components/user/user-edit/user-edit.component';
import { UserDetailComponent } from './components/user/user-detail/user-detail.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClassComponent,
    HighlightDirective,
    NgSwitchComponent,
    HomeComponent,
    UserComponent,
    UserNewComponent,
    UserEditComponent,
    UserDetailComponent,
    NavbarComponent
  ],

  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
