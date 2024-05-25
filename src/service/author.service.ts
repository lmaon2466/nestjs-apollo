import { Injectable } from "@nestjs/common";
import { AuthorDataSource } from "../data/author.data";
import { Author } from "../graph/entity/author.entity";
import { CreateAuthorInput } from "../graph/input/create-author.input";

/*
 * The purpose of this layer is to house all of the business logic and act
 * as a bridge between the data layer and the GraphQL layer.  A method here
 * can call multiple service layer and data layer methods to accomplish a
 * single task.  This layer is also responsible for transforming data from
 * one format to another.
 */
@Injectable()
export class AuthorService {
  constructor(private readonly authorData: AuthorDataSource) {}

  /**
   * Creates a new author.
   * @param input - The input for creating a new author.
   * @returns A promise that resolves to the created author.
   */
  async createAuthor(input: CreateAuthorInput): Promise<Author> {
    return await this.authorData.createAuthor(input);
  }

  /**
   * Fetches an author by its ID.
   * @param authorId - The ID of the author.
   * @returns A promise that resolves to the author with the given ID.
   */
  async getAuthorById(authorId: string): Promise<Author> {
    return await this.authorData.getAuthorById(authorId);
  }

  /**
   * Fetches all authors.
   * @returns A promise that resolves to an array of all authors.
   */
  async getAllAuthors(): Promise<Author[]> {
    return await this.authorData.getAllAuthors();
  }

  /**
   * Generates author records.
   * @returns The payload of the generated records.
   */
  generateRecords() {
    return this.authorData.generateRecords();
  }
}
