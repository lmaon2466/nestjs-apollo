import { InputType, Field, OmitType, PartialType } from "@nestjs/graphql";

@InputType("CreateCommentInput", {
  description: "The input type for creating a comment.",
})
export class CreateCommentInput {
  __typename: "CreateCommentInput" = "CreateCommentInput" as const;

  @Field(() => String, {
    name: "userId",
    description: "The user's record uuid.",
    nullable: false,
  })
  userId: string;

  @Field(() => String, {
    name: "content",
    description: "The comment's content.",
    nullable: false,
  })
  content: string;
}

@InputType()
export class UpdateCommentInput extends PartialType(
  OmitType(CreateCommentInput, ["userId"] as const)
) {}
