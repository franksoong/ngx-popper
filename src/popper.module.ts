import {CommonModule} from "@angular/common";
import {ModuleWithProviders, NgModule} from "@angular/core";
import {PopperContentOptions} from './popper-model';
import {PopperController} from './popper-directive';
import {PopperContent} from './popper-content';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PopperController,
    PopperContent
  ],
  exports: [
    PopperController,
    PopperContent
  ],
  entryComponents: [
    PopperContent
  ],
  providers: [
    {
      provide: 'popperDefaults', useValue: {}
    }]
})
export class NgxPopperModule {
  ngDoBootstrap() {
  }

  public static forRoot(popperBaseOptions: PopperContentOptions = {}): ModuleWithProviders {
    return {ngModule: NgxPopperModule, providers: [{provide: 'popperDefaults', useValue: popperBaseOptions}]};
  }
}