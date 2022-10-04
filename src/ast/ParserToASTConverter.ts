import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EZDiscordParserVisitor } from '../parser/EZDiscordParserVisitor';
import { Bot } from './nodes/Bot';
import { ASTNode } from './nodes/ASTNode';
import { BotContext, StatementContext, ConfigContext, TokenContext } from '../parser/EZDiscordParser';
import { Token } from './nodes/Token';
import { Config } from './nodes/Config';
import { ClientId } from './nodes/ClientId';
import { GuildId } from './nodes/GuildId';


export class ParserToASTConverter extends AbstractParseTreeVisitor<ASTNode> implements EZDiscordParserVisitor<ASTNode> {
    protected defaultResult(): ASTNode {
        return new Bot([]);
    }

    visitBot(ctx: BotContext) {
        console.log(ctx.statement());
        const statements = ctx.statement().map(statementContext => this.visit(statementContext));
        return new Bot(statements);
    }

    visitStatement(ctx: StatementContext) {

        if (ctx.config()) {
            return this.visitConfig(ctx.config()!);
        } else {
            throw Error("Other statements aren't implemented yet")
        }
    }

    visitConfig(ctx: ConfigContext) {
        const tokenContext = ctx.token();
        const clientIdContext = ctx.clientID();
        const guildIdContext = ctx.guildID();
        // console.log(ctx.children ? ctx.children.map(child => child.text) : ' no children');
        if (tokenContext) {
            return new Config(new Token(tokenContext.text));
        } else if (clientIdContext) {
            return new Config(new ClientId(clientIdContext.text));
        } else if (guildIdContext) {
            return new Config(new GuildId(guildIdContext.guildIDArray().GUILD_ID_STRING().map(idStringContext => idStringContext.text)))
        }

        throw new Error("Empty config object");
    }

}