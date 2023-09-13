import { ModuleRunner } from "./ModuleRunner";
import { Translator } from "./Translator";

mainRun()

// The main function that initializes everything
function mainRun()
{
	
	// Create the object that will run all the modules in a loop
	const runner = new ModuleRunner([
		  new Translator(),
	]);
	
	// Start the loop
	(function () {
	  runner.loop();
	})();
}