import { NgModule } from "@angular/core";
import { MenubarModule } from "primeng/menubar";
import { TriStateCheckboxModule } from "primeng/tristatecheckbox";
import { CheckboxModule } from "primeng/checkbox";
import { ListboxModule } from "primeng/listbox";
import { EditorModule } from "primeng/editor";
import { CardModule } from "primeng/card";
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { ConfirmDialogModule } from "primeng/confirmdialog";
import { DialogModule } from "primeng/dialog";
import { MessageModule } from "primeng/message";
import { SidebarModule } from "primeng/sidebar";
import {ToastModule} from 'primeng/toast';
import { FileUploadModule } from "primeng/fileupload";

@NgModule({
  exports: [
    ButtonModule,
    ConfirmDialogModule,
    ToastModule,
    DialogModule,
    MessageModule,
    SidebarModule,
    FileUploadModule,
    InputTextModule,
    MenubarModule,
    TriStateCheckboxModule,
    CheckboxModule,
    ListboxModule,
    EditorModule,
    CardModule
  ]
})
export class NgPrimeCustomModule {}
