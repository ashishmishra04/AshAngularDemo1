import {NgModule} from "@angular/core";
import {ContactListComponent} from "./contact-list.component";
import {CommonModule} from "@angular/common";
import {ContactComponent} from "./contact.component";
import {GridModule} from "@progress/kendo-angular-grid";
import {ButtonsModule} from "@progress/kendo-angular-buttons";

/**
 * Created by amishra on 2/6/2017.
 */


@NgModule({
  imports: [CommonModule, GridModule, ButtonsModule],
  exports: [ContactListComponent],
  declarations: [ContactListComponent, ContactComponent],
})

export class ContactListModule {

}
