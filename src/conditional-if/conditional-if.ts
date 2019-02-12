import { PLATFORM } from "aurelia-pal";
import { bindable, useView } from "aurelia-templating";

@useView(PLATFORM.moduleName("./conditional-if.html"))
export class ConditionalIf {

  @bindable public expression: any;

  public constructor(expression?: any) {
    this.expression = expression || false;
  }

  public evaluate(): boolean {
    return !! eval(this.expression);
  }

}
