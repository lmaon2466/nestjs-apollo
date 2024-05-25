import { Injectable } from "@nestjs/common/decorators";
import { CommentDataSource } from "../data/comment.data";
import { Comment } from "../graph/object/comment.object";
import { CreateCommentInput } from "src/graph/input/create-comment.input";

/*
 * The purpose of this layer is to house all of the business logic and act
 * as a bridge between the data layer and the GraphQL layer.  A method here
 * call call multiple service layer and data layer methods to accomplish a
 * single task.  This layer is also responsible for transforming data from
 * one format to another.
 */
@Injectable()
export class CommentService {
  constructor(private readonly commentData: CommentDataSource) {}

  /**
   * Creates a new comment.
   * @param input - The input for creating a new comment.
   * @returns A promise that resolves to the created comment.
   */
  async createComment(input: CreateCommentInput): Promise<Comment> {
    return await this.commentData.createComment(input);
  }

  /**
   * Fetches a comment by its ID.
   * @param id - The ID of the comment.
   * @returns A promise that resolves to the comment with the given ID.
   */
  async getComment(id: string): Promise<Comment> {
    return await this.commentData.getComment(id);
  }

  /**
   * Fetches all comments made by a specific user.
   * @param authorId - The ID of the author.
   * @returns A promise that resolves to an array of comments made by the author.
   */
  async getCommentsByAuthor(authorId: string): Promise<Comment[]> {
    return await this.commentData.getCommentsByAuthor(authorId);
  }

  /**
   * Fetches all comments.
   * @returns A promise that resolves to an array of all comments.
   */
  async getAllComments(): Promise<Comment[]> {
    return await this.commentData.getAllComments();
  }

  /**
   * Generates comment records.
   * @returns The payload of the generated records.
   */
  generateRecords() {
    return this.commentData.generateRecords();
  }
}
