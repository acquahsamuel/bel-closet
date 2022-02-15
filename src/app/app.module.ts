import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgPrimeCustomModule } from "./ng-prime.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgPrimeCustomModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
