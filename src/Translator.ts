import {Module} from "./ModuleRunner";
import {genericCleanup} from "./util";
import {TranslationMatrix} from "./TranslationMatrix.ts";

export class Translator implements Module {
  private tag = "pt-translator";
  cleanup() {
    genericCleanup(this.tag);
  }
  run() {
	// This is where you can implement code that will run every 250ms. Anything you add the class this.tag to will be cleaned up every time and you'll have to recreate it.
	const buttons = document.querySelectorAll("button");
	
	buttons.forEach(button => {
		if(button.textContent && TranslationMatrix[button.textContent.toLowerCase()])
		{
			button.textContent = TranslationMatrix[button.textContent];
		}
	});
  }
  
}