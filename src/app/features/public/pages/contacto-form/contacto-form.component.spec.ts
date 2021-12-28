import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { By } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { ContactoFormComponent } from "./contacto-form.component";

describe('ContactoFormComponent', () => {
  let component: ContactoFormComponent;
  let fixture: ComponentFixture<ContactoFormComponent>;
  let submitEl: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatDialogModule
      ],
      declarations: [ ContactoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    submitEl = fixture.debugElement.query(By.css("button"));
     
  });

  it('Se creo correctamente el componente', () => {
    expect(component).toBeTruthy();
  });
  it("Debe retornar formulario invalido", () => {
    const name = component.formulario.controls["name"];
    const email = component.formulario.controls["email"];
    const phone = component.formulario.controls["phone"];
    const message = component.formulario.controls["message"];
    name.setValue(" ");
    email.setValue(" ");
    phone.setValue(" ");
    message.setValue(" ");
    //TODO:true
    expect(component.formulario.invalid).toBeTrue();
  });
  it("boton invalidado correctamente", () => {
    const name = component.formulario.controls["name"];
    const email = component.formulario.controls["email"];
    const phone = component.formulario.controls["phone"];
    const message = component.formulario.controls["message"];
    name.setValue("Mariana");
    email.setValue("sasa@gmail.com ");
    phone.setValue("3126");
    message.setValue("Quiero conocer mas de utedes ONG");
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTrue();
  });
  it("boton validado correctamente", () => {
    const name = component.formulario.controls["name"];
    const email = component.formulario.controls["email"];
    const phone = component.formulario.controls["phone"];
    const message = component.formulario.controls["message"];
    name.setValue("Mariana");
    email.setValue("sasa@gmail.com ");
    phone.setValue("31266484");
    message.setValue("Quiero conocer mas de utedes ONG");
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
  });
});
