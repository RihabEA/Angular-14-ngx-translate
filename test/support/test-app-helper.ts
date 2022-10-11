import {TestBed, TestModuleMetadata} from "@angular/core/testing";
import {TestHelperAppModule} from "./test-helper-app.module";
import {ModuleWithProviders} from "@angular/core";

const resetTestingModule = TestBed.resetTestingModule;

export const THIRD_PARTY_PROVIDERS: ModuleWithProviders<any>[] = [
];

function completeModule(moduleDef: TestModuleMetadata): void {
  if (!moduleDef.imports) {
    moduleDef.imports = [];
  }
  moduleDef.imports.push(TestHelperAppModule);
  if (!moduleDef.providers) {
    moduleDef.providers = [];
  }
}

export const setupTestBed = (moduleDef: TestModuleMetadata, global: boolean = true) => {
  if (global) {
    beforeAll(done => (async () => {
      resetTestingModule();
      completeModule(moduleDef);
      TestBed.configureTestingModule(moduleDef);
      await TestBed.compileComponents();

      //Prevent angular from resetting
      TestBed.resetTestingModule = () => TestBed;
    })().then(done).catch(done.fail));

    afterAll(() => {
      TestBed.resetTestingModule = resetTestingModule;
      resetTestingModule();
    });
  } else {
    beforeEach(() => {
      completeModule(moduleDef);
      TestBed.configureTestingModule(moduleDef);
    });
  }
};
