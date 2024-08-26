import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
    ADVENTURE = 'Sdventure',
    CLASSICS = 'Classics',
    CRIME = 'Crime',
    FANTASY = 'Fantasy',
    HORROR = 'Horror',
    ROMANCE = 'Romance',
    SCIFI = 'Sci-Fi',
}

@Schema({
    timestamps: true
})

export class Book {
    @Prop()
    title: string;

    @Prop()
    description: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    rating: number;

    @Prop()
    category: Category;

    @Prop({ default: false })
    is_deleted: boolean;
}

export const BookSchema = SchemaFactory.createForClass(Book);