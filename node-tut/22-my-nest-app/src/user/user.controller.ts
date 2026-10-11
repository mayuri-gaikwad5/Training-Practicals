import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { UserService } from "./user.service.js";
import { UpdateUserDto } from "./dto/update-user.dto.js";
import { CreateUserDto } from "./dto/create-user.dto.js";

@Controller('user')
export class UserController {

    // private userService;
    // constructor(){
    //     this.userService=new UserService;
    // }

    constructor(private userService: UserService) { }
    @Get()
    getUsers() {
        return this.userService.get();
        // return {name:'Mayuri' , email:'mayuri@gmail.com'};
    }
    @Post()
    store(@Body() createuserDto: CreateUserDto) {
        return this.userService.create(createuserDto);
    }

    @Patch('/:userId')
    update(
        @Body() updateUserDto: UpdateUserDto,
        @Param('userId', ParseIntPipe) userId: number,
    ) {
        return this.userService.update(updateUserDto, userId);
    }
    @Get('/:userId')
    getUser(@Param('userId', ParseIntPipe) userId: number) {
        return this.userService.show(userId);
    }

    @Delete('/:userId')
    deleteUser(@Param('userId', ParseIntPipe) userId: number) {
        return this.userService.delete(userId);
    }
}
