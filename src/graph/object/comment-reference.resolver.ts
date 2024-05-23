import { Logger } from "@nestjs/common";
import { Resolver, ResolveReference } from "@nestjs/graphql";
import { plainToInstance } from "class-transformer";
import { CommentService } from "../../service/comment.service";
import { Comment } from "../object/comment.object";

@Resolver()
export class CommentsResolver {
  private readonly logger: Logger = new Logger(CommentsResolver.name);
  constructor(private readonly commentService: CommentService) {}

  @ResolveReference()
  async getComment(reference: {
    __typename: string;
    id: string;
  }): Promise<Comment> {
    return plainToInstance(
      Comment,
      this.commentService.getComment(reference.id),
    );
  }
}
