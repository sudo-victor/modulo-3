import { Schema, model, Document } from "mongoose"

// - name -> string[Required, minLength(3)]
// - email -> string[Unique, Required]
export interface IUser extends Document {
  name: string; 
  email: string; 
};

const UserSchema = new Schema({
  name: { type: String, required: true, minLength: 3 },
  email: { type: String, required: true, unique: true },
}, { timestamps: true })

const User = model<IUser>("User", UserSchema)

export { User }
