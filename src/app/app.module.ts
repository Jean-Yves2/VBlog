import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './NavBar/nav-bar/nav-bar.component';
import { FooterComponent } from './Footer/footer/footer.component';
import { HomeComponent } from './Home/home/home.component';
import { NgIconsModule } from '@ng-icons/core';
import { remixTwitterXFill } from '@ng-icons/remixicon';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({remixTwitterXFill }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
