import "./style.css";
import { imageToRaw } from "./convert";

// First load any PNG file -> Draw on Canvas -> Get Raw pixels -> Voila
const fileInput = document.getElementById("imageInput");

if (!fileInput) {
  throw new Error("File Input not found");
}

fileInput.onchange = async (e) => {
  let file = (<HTMLInputElement>e.target).files?.[0];
  if (!file) {
    return;
  }

  await imageToRaw(file);
};
