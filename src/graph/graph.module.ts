import { Module } from "@nestjs/common";
import { AuthorReferenceResolver } from "./entity/reference.resolver";
import { ServiceModule } from "../service/service.module";
import { AuthorResolver } from "./resolver/author.resolver";
import { CommentsResolver } from "./resolver/comments.resolver";

@Module({
  imports: [ServiceModule],
  providers: [AuthorReferenceResolver, AuthorResolver, CommentsResolver],
  exports: [AuthorReferenceResolver, AuthorResolver, CommentsResolver],
})
export class GraphModule {}
