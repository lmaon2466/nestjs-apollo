import { Injectable } from "@nestjs/common/decorators";
import { CommentDataSource } from "../data/comment.data";
import { Comment } from "../graph/object/comment.object";
import { generateRecordsPayload } from "../data/testData/comments";

@Injectable()
export class CommentService {
  // Inject the CommentDataSource in the constructor
  constructor(private readonly commentData: CommentDataSource) {}

  /**
   * Fetches a comment by its ID.
   * @param id - The ID of the comment.
   * @returns A promise that resolves to the comment with the given ID.
   *
   * Example usage:
   * const comment = await this.getComment('123');
   */
  async getComment(id: string): Promise<Comment> {
    return await this.commentData.getComment(id);
  }

  /**
   * Fetches all comments made by a specific user.
   * @param userId - The ID of the user.
   * @returns A promise that resolves to an array of comments made by the user.
   *
   * Example usage:
   * const comments = await this.getCommentsByAuthor('123');
   */
  async getCommentsByAuthor(userId: string): Promise<Comment[]> {
    return await this.commentData.getCommentsByAuthor(userId);
  }

  /**
   * Fetches all comments.
   * @returns A promise that resolves to an array of all comments.
   *
   * Example usage:
   * const comments = await this.getAllComments();
   */
  async getAllComments(): Promise<Comment[]> {
    return await this.commentData.getAllComments();
  }

  /**
   * Generates comment records.
   * @returns The payload of the generated records.
   *
   * Example usage:
   * const recordsPayload = this.generateRecords();
   */
  generateRecords(): generateRecordsPayload {
    return this.commentData.generateRecords();
  }
}
