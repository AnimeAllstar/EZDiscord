import { ASTVisitor } from "../../visitors/ASTVisitor";
import { ASTNode } from "../ASTNode";
import { VarType } from "./VarType";


export class FunctionCallValue implements ASTNode {
    constructor(private readonly _name: string, private readonly _params: (VarType<string | boolean | number> | FunctionCallValue)[]) {}

    get name() {
        return this._name;
    }

    get params() {
        return this._params;
    }

    accept<T, U>(visitor: ASTVisitor<T, U>, params: T): U {
        return visitor.visitBuiltInFunctionVarValue(this, params);
    }

}