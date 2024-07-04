import * as graphql from "@nestjs/graphql";
import { ShopifyProductDto } from "../shopifyIntegration/ShopifyProductDto";
import { ShopifyIntegrationService } from "./shopifyintegration.service";

export class ShopifyIntegrationResolver {
  constructor(protected readonly service: ShopifyIntegrationService) {}

  @graphql.Query(() => [ShopifyProductDto])
  async FetchShopifyProducts(
    @graphql.Args()
    args: string
  ): Promise<ShopifyProductDto[]> {
    return this.service.FetchShopifyProducts(args);
  }
}
