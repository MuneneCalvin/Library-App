import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Role } from './schemas/roles.schemas';

@Injectable()
export class RolesService {
    constructor(
        @InjectModel(Role.name) private roleModel: mongoose.Model<Role>
    ) {}

    async addNewRole(role: Role): Promise<Role> {
        const newRole = await this.roleModel.create(role);
        return newRole;
    }

    async getRoles(): Promise<Role[]> {
        const roles = await this.roleModel.find().exec();
        return roles;
    }

    async getRole(roleId: string): Promise<Role> {
        const isValidId = mongoose.isValidObjectId(roleId);
        if (!isValidId) {
            throw new BadRequestException(`Invalid role id: ${roleId}`);
        }

        const role = await this.roleModel.findById(roleId).exec();
        if (!role) {
            throw new NotFoundException(`Role with id ${roleId} not found`);
        }

        return role;
    }

    async updateRole(roleId: string, role: Role): Promise<Role> {
        const updatedRole = await this.roleModel.findByIdAndUpdate(roleId, role, { new: true, runValidators: true });
        return updatedRole;
    }

    async deleteRole(roleId: string): Promise<Role> {
        const deletedRole = await this.roleModel.findByIdAndDelete(roleId);
        return deletedRole;
    }
}
