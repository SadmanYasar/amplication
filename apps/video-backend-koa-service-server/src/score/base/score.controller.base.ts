/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ScoreService } from "../score.service";
import { ScoreCreateInput } from "./ScoreCreateInput";
import { Score } from "./Score";
import { ScoreFindManyArgs } from "./ScoreFindManyArgs";
import { ScoreWhereUniqueInput } from "./ScoreWhereUniqueInput";
import { ScoreUpdateInput } from "./ScoreUpdateInput";

export class ScoreControllerBase {
  constructor(protected readonly service: ScoreService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Score })
  async createScore(@common.Body() data: ScoreCreateInput): Promise<Score> {
    return await this.service.createScore({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Score] })
  @ApiNestedQuery(ScoreFindManyArgs)
  async scores(@common.Req() request: Request): Promise<Score[]> {
    const args = plainToClass(ScoreFindManyArgs, request.query);
    return this.service.scores({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Score })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async score(
    @common.Param() params: ScoreWhereUniqueInput
  ): Promise<Score | null> {
    const result = await this.service.score({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Score })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateScore(
    @common.Param() params: ScoreWhereUniqueInput,
    @common.Body() data: ScoreUpdateInput
  ): Promise<Score | null> {
    try {
      return await this.service.updateScore({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Score })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteScore(
    @common.Param() params: ScoreWhereUniqueInput
  ): Promise<Score | null> {
    try {
      return await this.service.deleteScore({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
