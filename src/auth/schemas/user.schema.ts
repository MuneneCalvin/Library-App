import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: true })

export class User extends Document {
    @Prop()
    first_name: string

    @Prop()
    last_name: string

    @Prop({ unique: [true, "Email Already Used"] })
    email: string

    @Prop()
    password: string

    @Prop({ default: true })
    isActive: boolean

    @Prop({ default: false })
    is_deleted: boolean
}

export const UserSchema = SchemaFactory.createForClass(User);