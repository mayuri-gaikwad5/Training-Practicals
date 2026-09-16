import {Message} from "@/model/user";
export interface ApiResponse{
    success:Boolean;
    message:string;
    isAcceptingMessages? :boolean
    messages?:Array<Message>
}