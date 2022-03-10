import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AddPermissionGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const permission = context.switchToHttp().getRequest().user.addPermission;
    console.log(context.switchToHttp().getRequest());
    if(permission === true){
      //console.log("3andou l 7a9");
      return true
    }
    else{
      //console.log("ma3andouch l 7a9");
      return false;
    }
  }
}
