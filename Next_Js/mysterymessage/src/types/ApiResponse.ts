import {Message} from "@/model/user";
export interface ApiResponse{
    success:Boolean;
    message:string;
    isAcceptingMessage? :boolean
    messages?:Array<Message>
}