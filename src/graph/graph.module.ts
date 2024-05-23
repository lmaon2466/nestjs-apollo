import { Module } from "@nestjs/common";
import { CommentsResolver } from "./object/comment-reference.resolver";
import { CommentsQueryResolver } from "./resolver/comments.resolver";
import { ServiceModule } from "../service/service.module";
import { GqlOptionsFactory } from "@nestjs/graphql";

@Module({
  imports: [ServiceModule],
  providers: [CommentsQueryResolver, CommentsResolver],
  exports: [CommentsQueryResolver, CommentsResolver],
})
export class GraphModule {}
