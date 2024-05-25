import { Logger } from "@nestjs/common";
import { Resolver, ResolveReference } from "@nestjs/graphql";
import { plainToInstance } from "class-transformer";
import { AuthorService } from "../../service/author.service";
import { Author } from "./author.entity";

@Resolver(() => Author)
export class AuthorReferenceResolver {
  private readonly logger: Logger = new Logger(AuthorReferenceResolver.name);
  constructor(private readonly authorService: AuthorService) {}

  @ResolveReference()
  async getAuthor(reference: {
    __typename: string;
    id: string;
  }): Promise<Author> {
    return plainToInstance(
      Author,
      this.authorService.getAuthorById(reference.id)
    );
  }
}
