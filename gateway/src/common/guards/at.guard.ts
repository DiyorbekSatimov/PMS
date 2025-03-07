import { ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { AuthGuard } from "@nestjs/passport";

@Injectable()
export class AtGuard extends AuthGuard('jwt'){
    constructor(private reflector: Reflector) {
        super(); 
    }

    canActivate(){
        return true;
    }
}