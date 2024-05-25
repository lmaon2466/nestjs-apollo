import { Logger } from "@nestjs/common";
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { plainToInstance } from "class-transformer";
import { AuthorService } from "../../service/author.service";
import { Author } from "../entity/author.entity";
import { CreateAuthorInput } from "../input/create-author.input";
import { generateRecordsPayloadType } from "../../data/testData/test-types";
import { generateRecordsPayload } from "../../data/testData/test-types";

@Resolver()
export class AuthorResolver {
  // Logger to log information, warnings, errors etc.
  private readonly logger: Logger = new Logger(AuthorResolver.name);

  // Inject the AuthorService in the constructor
  constructor(private readonly authorService: AuthorService) {}

  /**
   * Mutation to create a new author.
   * @param input - The input for creating a new author.
   * @returns A promise that resolves to the created author.
   *
   * Example GraphQL call:
   *
   * mutation {
   *   createAuthor(input: {
   *     firstName: "John",
   *     lastName: "Doe",
   *     username: "johndoe"
   *   }) {
   *     id
   *     firstName
   *     lastName
   *     username
   *   }
   * }
   */
  @Mutation(() => Author, {
    name: "createAuthor",
    description: "Create a new author.",
  })
  async createAuthor(
    @Args({
      type: () => CreateAuthorInput,
      name: "input",
      description: "The input for creating a new author.",
      nullable: false,
    })
    input: CreateAuthorInput
  ): Promise<Author> {
    const response = await this.authorService.createAuthor(input);
    if (!response) {
      return null;
    }
    return plainToInstance(Author, response);
  }

  /**
   * Mutation to generate test data records.
   * @returns An array of generated author records.
   *
   * Example GraphQL call:
   *
   * mutation {
   *   generateAuthorRecords {
   *     id
   *     firstName
   *     lastName
   *     username
   *   }
   * }
   */
  @Mutation(() => [Author], {
    name: "generateAuthorRecords",
    description: "Mutation to generate test data records",
  })
  generateTestAuthorRecords(): Author[] {
    return plainToInstance(Author, this.authorService.generateRecords());
  }

  /**
   * Fetches an author by its ID.
   * @param authorId - The ID of the author.
   * @returns A promise that resolves to the author with the given ID.
   *
   * Example GraphQL call:
   *
   * query {
   *   getAuthor(authorId: "123") {
   *     id
   *     firstName
   *     lastName
   *     username
   *   }
   * }
   */
  @Query(() => Author, {
    description: "Get an author by its ID.",
  })
  async getAuthorByAuthorId(
    @Args({
      type: () => String,
      name: "authorId",
      description: "The ID of the author.",
    })
    authorId: string
  ): Promise<Author> {
    const response = await this.authorService.getAuthorById(authorId);

    if (!response) {
      this.logger.warn(`No author found with id: ${authorId}`);
      return null;
    }
    return plainToInstance(Author, response);
  }

  /**
   * Fetches all authors.
   * @returns A promise that resolves to an array of all authors.
   *
   * Example GraphQL call:
   *
   * query {
   *   getAllAuthors {
   *     id
   *     firstName
   *     lastName
   *     username
   *   }
   * }
   */
  @Query(() => [Author], {
    description: "Get all authors.",
  })
  async getAllAuthors(): Promise<Author[]> {
    const response = await this.authorService.getAllAuthors();
    return plainToInstance(Author, response);
  }
}
