export interface Module {
  run();
  cleanup();
}

interface ModuleEntry {
  module: Module;
  name: string;
  enabled: boolean;
  count: number;
  cleanupTime: number;
  runTime: number;
}

export class ModuleRunner {
  private readonly modules: ModuleEntry[];	// The list of modules run by the extension
  
  constructor(modules: Module[]) {
	// Construct global variables
    this.modules = modules.map(m => this.moduleToME(m));
	
  }
  
  private moduleToME(module: Module): ModuleEntry {
    return {
      module,
      name: module.constructor.name,
      enabled: true,
      count: 0,
      cleanupTime: 0,
      runTime: 0
    }
  }

  loop() {
	// For each module, run it, clean it, and measure its performance
    this.modules.map(entry => {
      if (entry.enabled) {
        const t0 = performance.now();
        entry.module.cleanup();
        const cleanupTime = performance.now() - t0;
        const t1 = performance.now();
        entry.module.run();
        const runTime = performance.now() - t1;
        entry.count++;
        entry.cleanupTime += cleanupTime;
        entry.runTime += runTime;
      }
	  
    });

    // @TODO: Vary the interval based on module performance
    window.setTimeout(() => this.loop(), 250);
  }
  
}