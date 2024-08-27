import { Controller, Post, Get, Put, Delete, Body } from '@nestjs/common';
import { RolesService } from './roles.service';

@Controller('roles')
export class RolesController {
    constructor (
        private readonly rolesService: RolesService
    ) {}

    @Post()
    async addNewRole(@Body) {
        
    }

    @Get()
    async getRoles() {
        return this.rolesService.getRoles();
    }

    @Get(':roleId')
    async getRole() {
        return this.rolesService.getRole();
    }

    @Put(':roleId')
    async updateRole() {
        return this.rolesService.updateRole();
    }

    @Delete(':roleId')
    async deleteRole() {
        return this.rolesService.deleteRole();
    }
}
