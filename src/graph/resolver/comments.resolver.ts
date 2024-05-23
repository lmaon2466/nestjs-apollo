import { Logger } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { plainToInstance } from "class-transformer";
import { CommentService } from "../../service/comment.service";
import { Comment } from "../object/comment.object";
import {
  generateRecordsPayload,
  generateRecordsPayloadType,
} from "../../data/testData/comments";

@Resolver()
export class CommentsQueryResolver {
  private readonly logger: Logger = new Logger(CommentsQueryResolver.name);
  constructor(private readonly commentService: CommentService) {}

  @Mutation(() => [Comment], {
    name: "generateRecords",
    description: "Mutation to generate test data records",
  })
  generateTestCommentRecords(): generateRecordsPayload {
    return plainToInstance(
      generateRecordsPayloadType,
      this.commentService.generateRecords()
    );
  }

  @Query(() => [Comment], {
    description: "Get all comments authored by a user.",
  })
  async getComments(
    @Args({
      type: () => String,
      name: "userId",
    })
    userId: string
  ): Promise<Comment[]> {
    const response = await this.commentService.getAllComments(userId);

    if (response.length === 0) {
      return [];
      this.logger.warn(`No comments found for user: ${userId}`);
    }
    return plainToInstance(Comment, response);
  }
}
