// Todo componente do angular é represetado por um classe
import { Component } from "@angular/core";

@Component({
    selector: "card-produto",
    templateUrl: "./produto.component.html",
    styleUrls: ["./produto.component.css"]
})
export class ProdutoComponent {
    count: number = 1;
    mais() {
        this.count = this.count + 1
        return this.count
      }
      menos() {
        if (this.count <= 0) {
          return this.count
        }
        this.count = this.count - 1
        return this.count
      }
}