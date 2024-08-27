import { Prop, Schema } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})

export class Role {
    @Prop()
    role_name: string;

    @Prop()
    hierarchy: number;
}