import {Module} from "./ModuleRunner";
import {genericCleanup} from "./util";
import {TranslationMatrix} from "./TranslationMatrix.ts";
import {Selector} from "./Selector.ts";

export class Translator implements Module {
  private tag = "pt-translator";
  cleanup() {
    genericCleanup(this.tag);
  }
  run() {
	
	// Translate buttons
	const buttons = document.querySelectorAll("button");
	
	buttons.forEach(button => {
		if(button.textContent && TranslationMatrix[button.textContent.toLowerCase()])
		{
			button.textContent = TranslationMatrix[button.textContent];
		}
	});
	
	// Translate head buttons and sidebar buttons
	const headers = document.querySelectorAll(Selector.HeadItem);
	
	headers.forEach(header => {
		if(header.textContent)
		{
			if(header.firstChild && header.firstChild.textContent && header.firstChild.textContent.includes("LIC"))
			{
				header.firstChild.textContent = header.firstChild.textContent.replace(/LIC/, TranslationMatrix["license"]);
			}
			else if(header.firstChild && header.firstChild.textContent && header.firstChild.textContent.includes("HELP"))
			{
				header.firstChild.textContent = header.firstChild.textContent.replace(/HELP/, TranslationMatrix["help"]);
			}
			else if(header.firstChild && header.firstChild.textContent && header.firstChild.textContent.includes("NOTS"))
			{
				header.firstChild.textContent = header.firstChild.textContent.replace(/NOTS/, TranslationMatrix["notifications"]);
			}
			else if(header.firstChild && header.firstChild.textContent && header.firstChild.textContent.includes("Audio"))
			{
				header.firstChild.textContent = header.firstChild.textContent.replace(/Audio/, TranslationMatrix["audio"]);
			}
			else if(header.firstChild && header.firstChild.textContent && header.firstChild.textContent.includes("Logout"))
			{
				header.firstChild.textContent = header.firstChild.textContent.replace(/Logout/, TranslationMatrix["logout"]);
			}
		}
	});
  }
  
}