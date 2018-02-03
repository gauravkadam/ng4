import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserService } from './user.service';
import { SelecteduserComponent } from './selecteduser/selecteduser.component';
import { TestDirective } from './test.directive';
import { GenderPipe } from './gender.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';




const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'home', component: HomeComponent },
  { path: 'lazy', loadChildren: './lazy.module#LazyModule' },
  { path: 'user/:id', component: SelecteduserComponent }, 
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HelloComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    HomeComponent,
    UserComponent,
    SelecteduserComponent,
    TestDirective,
    GenderPipe,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
