import { InputType, Field, OmitType, PartialType } from "@nestjs/graphql";

@InputType("CreateAuthorInput", {
  description: "The input type for creating an author.",
})
export class CreateAuthorInput {
  __typename: "CreateAuthorInput" = "CreateAuthorInput" as const;

  @Field(() => String, {
    name: "firstname",
    description: "The author's first name.",
    nullable: false,
  })
  firstname: string;

  @Field(() => String, {
    name: "lastname",
    description: "The author's last name.",
    nullable: false,
  })
  lastname: string;

  @Field(() => String, {
    name: "username",
    description: "The author's username.",
    nullable: false,
  })
  username: string;

  @Field(() => [String], {
    name: "genre",
    description: "The author's genre(s) of work.",
    nullable: true,
  })
  genre?: string[];

  @Field(() => String, {
    name: "userId",
    description: "The user's record uuid.",
    nullable: false,
  })
  userId: string;
}

@InputType()
export class UpdateAuthorInput extends PartialType(
  OmitType(CreateAuthorInput, ["userId"] as const)
) {}
