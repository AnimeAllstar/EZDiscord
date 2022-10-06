import { 
    Bot, 
    Config, 
    Token, 
    ClientId, 
    GuildId,
    ArrayValue,
    BooleanValue,
    BuiltInFunction,
    NumberValue,
    StringValue,
    Variable,
    VarNameValue
} from "../nodes";
import { ASTVisitor } from "./ASTVisitor";

export class ASTBaseVisitor<T, U> implements ASTVisitor<T, U> {
    visitBot(bot: Bot, params: T): U {
        throw new Error("Method not implemented.");
    }
    visitConfig(config: Config, params: T): U {
        throw new Error("Method not implemented.");
    }
    visitToken(token: Token, params: T): U {
        throw new Error("Method not implemented.");
    }
    visitClientId(clientId: ClientId, params: T): U {
        throw new Error("Method not implemented.");
    }
    visitGuildId(guildId: GuildId, params: T): U {
        throw new Error("Method not implemented.");
    }
    visitArrayVarValue(arrVarVal: ArrayValue, params: T): U {
        throw new Error("Method not implemented.");
    }
    visitBooleanVarValue(booleanVarVal: BooleanValue, params: T): U {
        throw new Error("Method not implemented.");
    }
    visitBuiltInFunctionVarValue(BuiltInFunction: BuiltInFunction, params: T): U {
        throw new Error("Method not implemented.");
    }
    visitNumberVarValue(numberVarValue: NumberValue, params: T): U {
        throw new Error("Method not implemented.");
    }
    visitStringVarValue(stringVarValue: StringValue, params: T): U {
        throw new Error("Method not implemented.");
    }
    visitVariable<Y>(variable: Variable<Y>, params: T): U {
        throw new Error("Method not implemented.");
    }
    visitVarNameValue(varName: VarNameValue, params: T): U {
        throw new Error("Method not implemented.");
    }

}