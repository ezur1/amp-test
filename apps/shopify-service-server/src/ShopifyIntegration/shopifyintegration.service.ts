import { Injectable } from "@nestjs/common";
import { ShopifyProductDto } from "../shopifyIntegration/ShopifyProductDto";

@Injectable()
export class ShopifyIntegrationService {
  constructor() {}
  async FetchShopifyProducts(args: string): Promise<ShopifyProductDto[]> {
    throw new Error("Not implemented");
  }
}
