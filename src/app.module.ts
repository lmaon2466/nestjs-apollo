import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { GraphModule } from "./graph/graph.module";
import { UpdateAuthorInput } from "./graph/input/create-author.input";
import { UpdateCommentInput } from "./graph/input/create-comment.input";

@Module({
  imports: [
    GraphModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ["./**/*.gql"],
      playground: true,
      autoSchemaFile: join(process.cwd(), "src/schema.gql"),
      sortSchema: true,
      installSubscriptionHandlers: true,
      buildSchemaOptions: {
        orphanedTypes: [UpdateAuthorInput, UpdateCommentInput],
      },
    }),
  ],
})
export class AppModule {}
