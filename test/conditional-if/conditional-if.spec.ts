import { expect } from "chai";
import "reflect-metadata";

import { ConditionalIf } from "./../../src/conditional-if/conditional-if";

describe("Conditional If", () => {
    it("Should have a default expression evaluation of `false`",
        () => {
            const cif = new ConditionalIf();
            expect(cif.evaluate()).to.be.false;
        });
    it("Should evaluate the expression to `true`",
        () => {
            const cif = new ConditionalIf("1 === (2 - 1)");
            expect(cif.evaluate()).to.be.true;
        });
    it("Should evaluate the expression to `false`",
        () => {
            const cif = new ConditionalIf("1 + 2 >= (10 / 2)");
            expect(cif.evaluate()).to.be.false;
        });
});
