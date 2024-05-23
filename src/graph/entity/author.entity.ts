import { Directive, Field, ID, ObjectType } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { User } from "./user.entity";

@ObjectType("Author", {
  description: "The author of a body of work.",
})
@Directive('@key(fields: "id") @key(fields: "user")')
export class Author {
  __typename: "Author" = "Author" as const;

  @Field(() => ID, {
    name: "id",
    description: "The author's record uuid.",
    nullable: false,
  })
  id: string;

  @Field(() => User, {
    name: "user",
    description: "The author's user record.",
    nullable: false,
  })
  @Type(() => User)
  user: User;

  @Field(() => [String], {
    name: "genre",
    description: "The author's genre(s) of work.",
    nullable: true,
  })
  genre?: string[];
}
