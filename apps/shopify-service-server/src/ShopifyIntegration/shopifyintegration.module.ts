import { Module } from "@nestjs/common";
import { ShopifyIntegrationService } from "./shopifyintegration.service";
import { ShopifyIntegrationController } from "./shopifyintegration.controller";
import { ShopifyIntegrationResolver } from "./shopifyintegration.resolver";

@Module({
  controllers: [ShopifyIntegrationController],
  providers: [ShopifyIntegrationService, ShopifyIntegrationResolver],
  exports: [ShopifyIntegrationService],
})
export class ShopifyIntegrationModule {}
