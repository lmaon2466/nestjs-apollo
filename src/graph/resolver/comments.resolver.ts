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
  // Logger to log information, warnings, errors etc.
  private readonly logger: Logger = new Logger(CommentsQueryResolver.name);

  // Inject the CommentService in the constructor
  constructor(private readonly commentService: CommentService) {}

  /**
   * Mutation to generate test data records.
   * @returns An array of generated comment records.
   *
   * Example GraphQL call:
   *
   * mutation {
   *   generateRecords {
   *     id
   *     text
   *     authorId
   *   }
   * }
   */
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

  /**
   * Fetches all comments made by a specific user.
   * @param userId - The ID of the user.
   * @returns A promise that resolves to an array of comments made by the user.
   *
   * Example GraphQL call:
   *
   * query {
   *   getCommentsByAuthor(userId: "123") {
   *     id
   *     text
   *     authorId
   *   }
   * }
   */
  @Query(() => [Comment], {
    description: "Get all comments authored by a user.",
  })
  async getCommentsByAuthor(
    @Args({
      type: () => String,
      name: "userId",
    })
    userId: string
  ): Promise<Comment[]> {
    const response = await this.commentService.getCommentsByAuthor(userId);

    if (response.length === 0) {
      this.logger.warn(`No comments found for user: ${userId}`);
      return [];
    }
    return plainToInstance(Comment, response);
  }

  /**
   * Fetches all comments.
   * @returns A promise that resolves to an array of all comments.
   *
   * Example GraphQL call:
   *
   * query {
   *   getAllComments {
   *     id
   *     text
   *     authorId
   *   }
   * }
   */
  @Query(() => [Comment], {
    description: "Get all comments.",
  })
  async getAllComments(): Promise<Comment[]> {
    const response = await this.commentService.getAllComments();
    return plainToInstance(Comment, response);
  }
}
