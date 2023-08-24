import { PartialType } from "@nestjs/swagger";
import { CreatePublisingDto } from "./create-publishing.dto";

export class UpdatePublishingDto extends PartialType(CreatePublisingDto) {}