import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {ContactListModule} from "./Contacts/contact-list.module";
import {ButtonsModule} from "@progress/kendo-angular-buttons";
import {AppleComponentComponent} from "./apple/apple-component/apple-component.component";

@NgModule({
  declarations: [
    AppComponent,
    AppleComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ContactListModule,
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
