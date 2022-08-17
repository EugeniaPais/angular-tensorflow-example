import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as mobilenet from "@tensorflow-models/mobilenet";

@Component({
  selector: "app-image-classification",
  templateUrl: "./image-classification.component.html",
  styleUrls: ["./image-classification.component.css"]
})
export class ImageClassificationComponent implements OnInit {
  @ViewChild("currentImage", { static: false }) currentImg: ElementRef;
  model: any;
  loading: boolean;
  imgSrc: any;
  predictions: any;

  constructor() {}

  async ngOnInit() {
    this.loading = true;
    this.model = await mobilenet.load();
    this.loading = false;
  }

  async fileChange(event) {
    this.predictions = null;
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = (res: any) => {
        this.imgSrc = res.target.result;

        setTimeout(async () => {
          if (!!this.currentImg && this.currentImg.nativeElement) {
            this.predictions = await this.model.classify(
              this.currentImg.nativeElement
            );
             console.log(this.predictions);
          }
        });
      };
    }
  }
}
