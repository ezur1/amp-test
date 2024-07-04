import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ShopifyIntegrationService } from "./shopifyintegration.service";
import { ShopifyProductDto } from "../shopifyIntegration/ShopifyProductDto";

@swagger.ApiTags("shopifyIntegrations")
@common.Controller("shopifyIntegrations")
export class ShopifyIntegrationController {
  constructor(protected readonly service: ShopifyIntegrationService) {}

  @common.Get("/shopify-products")
  @swagger.ApiOkResponse({
    type: ShopifyProductDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchShopifyProducts(
    @common.Body()
    body: string
  ): Promise<ShopifyProductDto[]> {
        return this.service.FetchShopifyProducts(body);
      }
}
