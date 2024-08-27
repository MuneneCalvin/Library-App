import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class RolesDto {
    @IsString()
    @IsNotEmpty()
    readonly role_name: string;

    @IsNotEmpty()
    @IsString()
    readonly hierarchy: number;
}

export class UpdateRoleDto {
    @IsOptional()
    @IsString()
    readonly role_name: string;

    @IsOptional()
    @IsString()
    readonly hierarchy: number;
}