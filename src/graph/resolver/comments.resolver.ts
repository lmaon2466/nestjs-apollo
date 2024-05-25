import { Logger } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { plainToInstance } from "class-transformer";
import { CommentService } from "../../service/comment.service";
import { Comment } from "../object/comment.object";
import {} from "../../data/testData/comments";
import { CreateCommentInput } from "../input/create-comment.input";
import { generateRecordsPayloadType } from "../../data/testData/test-types";
import { generateRecordsPayload } from "../../data/testData/test-types";

@Resolver()
export class CommentsResolver {
  // Logger to log information, warnings, errors etc.
  private readonly logger: Logger = new Logger(CommentsResolver.name);

  // Inject the CommentService in the constructor
  constructor(private readonly commentService: CommentService) {}

  /**
   * Mutation to create a new comment.
   * @param input - The input for creating a new comment.
   * @returns A promise that resolves to the created comment.
   *
   * Example GraphQL call:
   *
   * mutation {
   *   createComment(input: {
   *     text: "This is a comment",
   *     authorId: "123"
   *   }) {
   *     id
   *     text
   *     authorId
   *   }
   * }
   */
  @Mutation(() => Comment, {
    name: "createComment",
    description: "Create a new comment.",
  })
  async createComment(
    @Args({
      type: () => CreateCommentInput,
      name: "input",
      description: "The input for creating a new comment.",
      nullable: false,
    })
    input: CreateCommentInput
  ): Promise<Comment> {
    const response = await this.commentService.createComment(input);
    if (!response) {
      return null;
    }
    return plainToInstance(Comment, response);
  }

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
    name: "generateCommentRecords",
    description: "Mutation to generate test data records",
  })
  generateTestCommentRecords(): Comment[] {
    return plainToInstance(Comment, this.commentService.generateRecords());
  }

  /**
   * Fetches all comments made by a specific user.
   * @param authorId - The ID of the author.
   * @returns A promise that resolves to an array of comments made by the user.
   *
   * Example GraphQL call:
   *
   * query {
   *   getCommentsByAuthor(authorId: "123") {
   *     id
   *     text
   *     authorId
   *   }
   * }
   */
  @Query(() => [Comment], {
    description: "Get all comments by an author.",
  })
  async getCommentsByAuthor(
    @Args({
      type: () => String,
      name: "authorId",
    })
    authorId: string
  ): Promise<Comment[]> {
    const response = await this.commentService.getCommentsByAuthor(authorId);

    if (response.length === 0) {
      this.logger.warn(`No comments found for author: ${authorId}`);
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
