import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-donations",
  templateUrl: "./donations.component.html",
  styleUrls: ["./donations.component.scss"],
})
export class DonationsComponent implements OnInit {
  public formulario: FormGroup;
  text: String = "Donacion a realizar";

  constructor(private frB: FormBuilder) {
    this.formulario = this.frB.group({
      donation: ["", [Validators.required]],
    });
  }

  ngOnInit(): void {}

  donate() {
    const donation = {
      donation: "$" + this.formulario.get("donation")?.value,
    };
    console.log(donation);
  }
}
